import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const featured = searchParams.get("featured")
    const limit = Number.parseInt(searchParams.get("limit") || "10")

    let query = `
      SELECT 
        id, title, slug, description, category, featured_image,
        client_name, project_url, case_study_url,
        results_metric_1_label, results_metric_1_value,
        results_metric_2_label, results_metric_2_value,
        technologies, featured, created_at
      FROM portfolio_projects 
      WHERE published = true
    `

    const params: any[] = []
    let paramIndex = 1

    if (category && category !== "all") {
      query += ` AND category = $${paramIndex}`
      params.push(category)
      paramIndex++
    }

    if (featured === "true") {
      query += ` AND featured = true`
    }

    query += ` ORDER BY featured DESC, created_at DESC LIMIT $${paramIndex}`
    params.push(limit)

    const projects = await sql(query, params)

    return NextResponse.json({ projects })
  } catch (error) {
    console.error("Portfolio API error:", error)
    return NextResponse.json({ error: "Failed to fetch portfolio projects" }, { status: 500 })
  }
}
