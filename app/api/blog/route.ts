import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import SQL from "sql-template-strings"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const featured = searchParams.get("featured")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    // Create a base query using SQL template strings
    let query = SQL`
      SELECT 
        id, title, slug, excerpt, featured_image, category, 
        author_name, author_avatar, read_time, created_at,
        published, featured
      FROM blog_posts 
      WHERE published = true
    `

    // Add conditions using append method
    if (category && category !== "all") {
      query = query.append(SQL` AND category = ${category}`)
    }

    if (featured === "true") {
      query = query.append(SQL` AND featured = true`)
    }

    // Add order by, limit and offset
    query = query.append(SQL` ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`)

    // Execute the query
    const posts = await sql`${query}`

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
