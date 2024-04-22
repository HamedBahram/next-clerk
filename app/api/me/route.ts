import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export async function GET() {
  const { userId } = auth()

  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  return NextResponse.json({ userId }, { status: 200 })
}
