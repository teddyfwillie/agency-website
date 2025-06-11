import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { firstName, lastName, email, phone, companyName, projectType, budgetRange, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Insert into database
    const result = await sql`
      INSERT INTO contact_submissions (
        first_name, last_name, email, phone, company_name, 
        project_type, budget_range, message, status
      ) VALUES (
        ${firstName}, ${lastName}, ${email}, ${phone || null}, ${companyName || null},
        ${projectType || null}, ${budgetRange || null}, ${message}, 'new'
      )
      RETURNING id, created_at
    `

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
      submissionId: result[0].id,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to submit form. Please try again." }, { status: 500 })
  }
}
