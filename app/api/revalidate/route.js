import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// Done by following ON DEMAND REVALIDATION
// Followed instructions by Dave:
// https://www.youtube.com/watch?v=6ih_3m_UPKg&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=12&ab_channel=DaveGray
export async function GET(req) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return new NextResponse(JSON.stringify({ message: "Invalid token" }), {
      status: 401,
      statusText: "Unauthorized",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const path = req.nextUrl.searchParams.get("path") || "/insights";
  revalidatePath(path);
  return NextResponse.json({ revalidated: true });
}
