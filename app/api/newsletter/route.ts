import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, firstName, lastName, source } = body

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email address is required" }, { status: 400 })
    }

    // Check if email already exists
    const existing = await sql`
      SELECT id FROM newsletter_subscriptions WHERE email = ${email}
    `

    if (existing.length > 0) {
      return NextResponse.json({ error: "Email already subscribed" }, { status: 409 })
    }

    // Insert new subscription
    const result = await sql`
      INSERT INTO newsletter_subscriptions (
        email, first_name, last_name, source, active, confirmed
      ) VALUES (
        ${email}, ${firstName || null}, ${lastName || null}, 
        ${source || "website"}, true, false
      )
      RETURNING id, created_at
    `

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to our newsletter!",
      subscriptionId: result[0].id,
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 })
  }
}
