import { NextResponse, type NextRequest } from 'next/server';
import { siteConfig } from '@/content/site';
import { processConsultationRequest } from '@/lib/server/consultation-service';

function getClientKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const firstIp = forwarded.split(',')[0]?.trim();
    if (firstIp) {
      return firstIp;
    }
  }
  const realIp = request.headers.get('x-real-ip')?.trim();
  return realIp || 'local-client';
}

function isSameOriginRequest(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  if (!origin) {
    return true;
  }
  const host = request.headers.get('host');
  if (!host) {
    return true;
  }
  try {
    const originHost = new URL(origin).host;
    return originHost === host;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const noStoreHeaders: Record<string, string> = {
    'Cache-Control': 'no-store, max-age=0',
  };

  if (!isSameOriginRequest(request)) {
    return NextResponse.json(
      {
        ok: false,
        code: 'VALIDATION_ERROR',
        message: 'Invalid request origin.',
        fallbackPhone: {
          display: siteConfig.phoneDisplay,
          href: siteConfig.phoneHref,
        },
      },
      { status: 403, headers: noStoreHeaders },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        code: 'VALIDATION_ERROR',
        message: 'Invalid JSON request body.',
        fallbackPhone: {
          display: siteConfig.phoneDisplay,
          href: siteConfig.phoneHref,
        },
      },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const result = await processConsultationRequest(body, {
    clientKey: getClientKey(request),
  });

  if (result.retryAfterSeconds) {
    noStoreHeaders['Retry-After'] = String(result.retryAfterSeconds);
  }

  return NextResponse.json(result.body, {
    status: result.status,
    headers: noStoreHeaders,
  });
}
