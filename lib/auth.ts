import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

// In a real application, you would use a proper authentication system
// This is a simple implementation for demonstration purposes
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "password"
const AUTH_COOKIE_NAME = "admin_auth"
const AUTH_TOKEN_SECRET = process.env.AUTH_TOKEN_SECRET || "your-secret-key"

export async function login(username: string, password: string) {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // In a real app, you would use a proper JWT or session mechanism
    const token = Buffer.from(
      JSON.stringify({
        username,
        exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
      })
    ).toString("base64")

    return { success: true, token }
  }
  
  return { success: false, message: "Invalid credentials" }
}

export async function isAuthenticated() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get(AUTH_COOKIE_NAME)
  
  if (!authCookie?.value) {
    return false
  }
  
  try {
    const tokenData = JSON.parse(
      Buffer.from(authCookie.value, "base64").toString()
    )
    
    if (tokenData.exp < Date.now()) {
      return false
    }
    
    return tokenData.username === ADMIN_USERNAME
  } catch (error) {
    return false
  }
}

export function setAuthCookie(token: string, response: NextResponse) {
  response.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  })
  
  return response
}

export function clearAuthCookie(response: NextResponse) {
  response.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  })
  
  return response
}

export async function requireAuth(request: NextRequest) {
  const authCookie = request.cookies.get(AUTH_COOKIE_NAME)
  
  if (!authCookie?.value) {
    return false
  }
  
  try {
    const tokenData = JSON.parse(
      Buffer.from(authCookie.value, "base64").toString()
    )
    
    if (tokenData.exp < Date.now()) {
      return false
    }
    
    return tokenData.username === ADMIN_USERNAME
  } catch (error) {
    return false
  }
}
