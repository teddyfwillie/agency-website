import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { email, firstName, lastName, companyName, websiteUrl, phone, leadType = "website_audit" } = body

    // Validate required fields
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email address is required" }, { status: 400 })
    }

    // Insert lead submission
    const result = await sql`
      INSERT INTO lead_submissions (
        email, first_name, last_name, company_name, 
        website_url, phone, lead_type, status
      ) VALUES (
        ${email}, ${firstName || null}, ${lastName || null}, ${companyName || null},
        ${websiteUrl || null}, ${phone || null}, ${leadType}, 'new'
      )
      RETURNING id, created_at
    `

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll send your free website audit within 24 hours.",
      leadId: result[0].id,
    })
  } catch (error) {
    console.error("Lead magnet error:", error)
    return NextResponse.json({ error: "Failed to submit request. Please try again." }, { status: 500 })
  }
}
