import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get("featured")
    const limit = Number.parseInt(searchParams.get("limit") || "10")

    let query = `
      SELECT 
        id, client_name, client_title, client_company, client_avatar,
        testimonial_text, rating, project_result, featured, created_at
      FROM testimonials 
      WHERE approved = true
    `

    const params: any[] = []
    const paramIndex = 1

    if (featured === "true") {
      query += ` AND featured = true`
    }

    query += ` ORDER BY featured DESC, created_at DESC LIMIT $${paramIndex}`
    params.push(limit)

    const testimonials = await sql(query, params)

    return NextResponse.json({ testimonials })
  } catch (error) {
    console.error("Testimonials API error:", error)
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 })
  }
}
