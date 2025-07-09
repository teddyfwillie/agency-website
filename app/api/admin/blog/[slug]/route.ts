import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import slugify from "slugify"

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug
    
    if (!slug) {
      return NextResponse.json(
        { error: "Slug parameter is required" },
        { status: 400 }
      )
    }

    const posts = await sql`
      SELECT 
        id, title, slug, excerpt, content, featured_image, category, 
        author_name, author_avatar, read_time, created_at,
        published, featured
      FROM blog_posts 
      WHERE slug = ${slug}
      LIMIT 1
    `

    if (!posts.length) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ post: posts[0] })
  } catch (error) {
    console.error("Blog API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug
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

    // Check if post exists
    const existingPosts = await sql`
      SELECT id FROM blog_posts WHERE slug = ${slug}
    `
    
    if (existingPosts.length === 0) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      )
    }

    // Generate a new slug if title has changed
    let newSlug = slug
    if (title) {
      newSlug = slugify(title, { lower: true, strict: true })
      
      // If the slug would change, check if the new slug already exists (but isn't this post)
      if (newSlug !== slug) {
        const existingSlugs = await sql`
          SELECT slug FROM blog_posts WHERE slug = ${newSlug} AND slug != ${slug}
        `
        
        // If new slug exists elsewhere, append a timestamp to make it unique
        if (existingSlugs.length > 0) {
          newSlug = `${newSlug}-${Date.now().toString().slice(-6)}`
        }
      }
    }

    // Update the blog post
    const result = await sql`
      UPDATE blog_posts SET
        title = ${title},
        slug = ${newSlug},
        excerpt = ${excerpt || ""},
        content = ${content},
        featured_image = ${featured_image || null},
        category = ${category},
        author_name = ${author_name},
        author_avatar = ${author_avatar || null},
        read_time = ${read_time || 5},
        published = ${published !== undefined ? published : true},
        featured = ${featured !== undefined ? featured : false},
        updated_at = NOW()
      WHERE slug = ${slug}
      RETURNING id, slug
    `

    return NextResponse.json({
      success: true,
      post: {
        id: result[0].id,
        slug: result[0].slug
      }
    })
  } catch (error) {
    console.error("Error updating blog post:", error)
    return NextResponse.json(
      { error: "Failed to update blog post" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug
    
    // Check if post exists
    const existingPosts = await sql`
      SELECT id FROM blog_posts WHERE slug = ${slug}
    `
    
    if (existingPosts.length === 0) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      )
    }

    // Delete the blog post
    await sql`
      DELETE FROM blog_posts WHERE slug = ${slug}
    `

    return NextResponse.json({
      success: true,
      message: "Blog post deleted successfully"
    })
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 }
    )
  }
}
