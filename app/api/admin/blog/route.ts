import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import slugify from "slugify"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Number.parseInt(searchParams.get("limit") || "100")
    const offset = Number.parseInt(searchParams.get("offset") || "0")
    
    // Admin can see all posts, including unpublished ones
    const posts = await sql`
      SELECT 
        id, title, slug, excerpt, featured_image, category, 
        author_name, author_avatar, read_time, created_at,
        published, featured
      FROM blog_posts
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `

    return NextResponse.json({
      posts,
      pagination: {
        limit,
        offset,
        hasMore: posts.length === limit,
      },
    })
  } catch (error) {
    console.error("Admin blog API error:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      title, 
      excerpt, 
      content, 
      featured_image, 
      category, 
      author_name, 
      author_avatar, 
      read_time, 
      published, 
      featured 
    } = body

    // Validate required fields
    if (!title || !content || !category || !author_name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Generate a slug from the title
    let slug = slugify(title, { lower: true, strict: true })
    
    // Check if slug already exists
    const existingSlugs = await sql`
      SELECT slug FROM blog_posts WHERE slug = ${slug}
    `
    
    // If slug exists, append a timestamp to make it unique
    if (existingSlugs.length > 0) {
      slug = `${slug}-${Date.now().toString().slice(-6)}`
    }

    // Insert the new blog post
    const result = await sql`
      INSERT INTO blog_posts (
        title, 
        slug, 
        excerpt, 
        content, 
        featured_image, 
        category, 
        author_name, 
        author_avatar, 
        read_time, 
        published, 
        featured,
        created_at
      ) VALUES (
        ${title}, 
        ${slug}, 
        ${excerpt || ""}, 
        ${content}, 
        ${featured_image || null}, 
        ${category}, 
        ${author_name}, 
        ${author_avatar || null}, 
        ${read_time || 5}, 
        ${published !== undefined ? published : true}, 
        ${featured !== undefined ? featured : false},
        NOW()
      )
      RETURNING id, slug
    `

    return NextResponse.json({
      success: true,
      post: {
        id: result[0].id,
        slug: result[0].slug
      }
    }, { status: 201 })
  } catch (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    )
  }
}
