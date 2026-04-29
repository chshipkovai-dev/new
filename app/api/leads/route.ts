import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const VALID_PLANS = ['free', 'pro', 'business'] as const;
type Plan = typeof VALID_PLANS[number];

interface LeadPayload {
  email: string;
  business_name?: string;
  plan: Plan;
}

async function supabaseUpsertLead(payload: LeadPayload): Promise<{ error: string | null }> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    return { error: 'Supabase configuration is missing' };
  }

  const url = `${SUPABASE_URL}/rest/v1/leads`;

  const body = JSON.stringify({
    email: payload.email,
    business_name: payload.business_name || null,
    plan: payload.plan,
    source: 'landing_v4',
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Prefer': 'resolution=merge-duplicates,return=minimal',
      },
      body,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[leads/route] Supabase error:', response.status, errorText);
      return { error: `Supabase responded with status ${response.status}` };
    }

    return { error: null };
  } catch (err) {
    console.error('[leads/route] Network error reaching Supabase:', err);
    return { error: 'Network error reaching Supabase' };
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid JSON body' },
      { status: 400 }
    );
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json(
      { success: false, message: 'Request body must be a JSON object' },
      { status: 400 }
    );
  }

  const { email, business_name, plan } = body as Record<string, unknown>;

  // Validate email
  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json(
      { success: false, message: 'A valid email address is required' },
      { status: 400 }
    );
  }

  // Validate plan
  if (!plan || !VALID_PLANS.includes(plan as Plan)) {
    return NextResponse.json(
      { success: false, message: `Plan must be one of: ${VALID_PLANS.join(', ')}` },
      { status: 400 }
    );
  }

  // Validate optional business_name
  if (business_name !== undefined && typeof business_name !== 'string') {
    return NextResponse.json(
      { success: false, message: 'business_name must be a string' },
      { status: 400 }
    );
  }

  const payload: LeadPayload = {
    email: email.trim().toLowerCase(),
    business_name: typeof business_name === 'string' ? business_name.trim().slice(0, 255) : undefined,
    plan: plan as Plan,
  };

  const { error } = await supabaseUpsertLead(payload);

  if (error) {
    console.error('[leads/route] Failed to save lead:', error);
    return NextResponse.json(
      { success: false, message: 'Service temporarily unavailable. Please try again later.' },
      { status: 503 }
    );
  }

  return NextResponse.json(
    { success: true, message: "We'll contact you within 24 hours" },
    { status: 200 }
  );
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}
