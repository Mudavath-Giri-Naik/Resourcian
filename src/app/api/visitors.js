import { NextResponse } from "next/server";

let visitorCount = 0;

export async function GET() {
  visitorCount += 1;
  return NextResponse.json({ count: visitorCount });
}
