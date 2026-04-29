import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const VALID_PLANS = ['free', 'pro', 'business'] as const;
type Plan = typeof VALID_PLANS[number];

interface LeadPayload {
  email: string;
  business_name?: string;
  plan: Plan;
}

async function supabaseUpsertLead(payload: LeadPayload): Promise<{ error: string | null }> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return { error: 'Supabase credentials are not configured' };
  }

  const url = `${SUPABASE_URL}/rest/v1/leads`;

  const body = JSON.stringify({
    email: payload.email,
    business_name: payload.business_name ?? null,
    plan: payload.plan,
    source: 'landing_v4',
  });

  let response: Response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'Prefer': 'resolution=merge-duplicates,return=minimal',
      },
      body,
    });
  } catch (networkError) {
    return { error: 'Network error while contacting Supabase' };
  }

  if (!response.ok) {
    let detail = '';
    try {
      const json = await response.json();
      detail = json?.message ?? json?.error ?? '';
    } catch {
      detail = await response.text().catch(() => '');
    }
    return { error: `Supabase responded with ${response.status}: ${detail}` };
  }

  return { error: null };
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

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json(
      { success: false, message: 'Request body must be a JSON object' },
      { status: 400 }
    );
  }

  const raw = body as Record<string, unknown>;

  // Validate email
  const email = typeof raw.email === 'string' ? raw.email.trim().toLowerCase() : '';
  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { success: false, message: 'A valid email address is required' },
      { status: 400 }
    );
  }

  // Validate plan
  const plan = typeof raw.plan === 'string' ? raw.plan.trim().toLowerCase() : '';
  if (!VALID_PLANS.includes(plan as Plan)) {
    return NextResponse.json(
      { success: false, message: `Plan must be one of: ${VALID_PLANS.join(', ')}` },
      { status: 400 }
    );
  }

  // Optional business_name
  const business_name =
    typeof raw.business_name === 'string' && raw.business_name.trim().length > 0
      ? raw.business_name.trim().slice(0, 255)
      : undefined;

  const payload: LeadPayload = {
    email,
    plan: plan as Plan,
    business_name,
  };

  const { error } = await supabaseUpsertLead(payload);

  if (error) {
    console.error('[leads/route] Supabase error:', error);
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
