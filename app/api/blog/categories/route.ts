import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const categories = await sql`
      SELECT name, slug, color FROM blog_categories ORDER BY name
    `

    return NextResponse.json({ categories })
  } catch (error) {
    console.error("Blog categories API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch blog categories" },
      { status: 500 }
    )
  }
}
