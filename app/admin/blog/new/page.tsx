"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

type Category = {
  name: string
  slug: string
  color: string
}

export default function NewBlogPostPage() {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    featured_image: "",
    category: "",
    author_name: "",
    author_avatar: "",
    read_time: 5,
    published: true,
    featured: false,
  })

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/blog/categories")
      
      if (!response.ok) {
        throw new Error("Failed to fetch categories")
      }
      
      const data = await response.json()
      setCategories(data.categories || [])
    } catch (err: any) {
      console.error("Error fetching categories:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setIsSaving(true)

    try {
      const response = await fetch("/api/admin/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create blog post")
      }

      setSuccess("Blog post created successfully!")
      
      // Redirect after a short delay to show success message
      setTimeout(() => {
        router.push("/admin/blog")
      }, 1500)
    } catch (err: any) {
      setError(err.message || "An error occurred while creating the blog post")
      console.error("Error creating blog post:", err)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="mr-4"
            />
            <h1 className="text-2xl font-bold text-gray-900">New Blog Post</h1>
          </div>
          <Link href="/admin/blog">
            <Button variant="ghost">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog Posts
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {success && (
            <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <Label htmlFor="title" className="text-base font-medium">
                Title *
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1"
                placeholder="Enter blog post title"
              />
            </div>
            
            {/* Excerpt */}
            <div>
              <Label htmlFor="excerpt" className="text-base font-medium">
                Excerpt
              </Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                className="mt-1 h-20"
                placeholder="Brief summary of the blog post"
              />
            </div>
            
            {/* Content */}
            <div>
              <Label htmlFor="content" className="text-base font-medium">
                Content *
              </Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                className="mt-1 h-64"
                placeholder="Write your blog post content here (HTML supported)"
              />
            </div>
            
            {/* Featured Image */}
            <div>
              <Label htmlFor="featured_image" className="text-base font-medium">
                Featured Image URL
              </Label>
              <Input
                id="featured_image"
                name="featured_image"
                value={formData.featured_image}
                onChange={handleChange}
                className="mt-1"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category */}
              <div>
                <Label htmlFor="category" className="text-base font-medium">
                  Category *
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => handleSelectChange("category", value)}
                  required
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.slug} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Author Name */}
              <div>
                <Label htmlFor="author_name" className="text-base font-medium">
                  Author Name *
                </Label>
                <Input
                  id="author_name"
                  name="author_name"
                  value={formData.author_name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                  placeholder="Author name"
                />
              </div>
              
              {/* Author Avatar */}
              <div>
                <Label htmlFor="author_avatar" className="text-base font-medium">
                  Author Avatar URL
                </Label>
                <Input
                  id="author_avatar"
                  name="author_avatar"
                  value={formData.author_avatar}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              
              {/* Read Time */}
              <div>
                <Label htmlFor="read_time" className="text-base font-medium">
                  Read Time (minutes)
                </Label>
                <Input
                  id="read_time"
                  name="read_time"
                  type="number"
                  min="1"
                  value={formData.read_time}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Published */}
              <div className="flex items-center space-x-2">
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => handleSwitchChange("published", checked)}
                />
                <Label htmlFor="published" className="text-base font-medium">
                  Published
                </Label>
              </div>
              
              {/* Featured */}
              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => handleSwitchChange("featured", checked)}
                />
                <Label htmlFor="featured" className="text-base font-medium">
                  Featured Post
                </Label>
              </div>
            </div>
            
            <div className="pt-4 border-t flex justify-end">
              <Button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700"
                disabled={isSaving}
              >
                <Save className="h-4 w-4 mr-2" />
                {isSaving ? "Saving..." : "Save Post"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
