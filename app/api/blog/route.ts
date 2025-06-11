import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const featured = searchParams.get("featured")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    let query = `
      SELECT 
        id, title, slug, excerpt, featured_image, category, 
        author_name, author_avatar, read_time, created_at,
        published, featured
      FROM blog_posts 
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

    query += ` ORDER BY created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`
    params.push(limit, offset)

    const posts = await sql(query, params)

    return NextResponse.json({
      posts,
      pagination: {
        limit,
        offset,
        hasMore: posts.length === limit,
      },
    })
  } catch (error) {
    console.error("Blog API error:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}
