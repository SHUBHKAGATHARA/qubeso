import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    'google.com, pub-5486342609596361, DIRECT, f08c47fec0942fa0',
    {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}
