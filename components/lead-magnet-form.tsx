"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react"

interface LeadMagnetFormProps {
  leadType?: string
  buttonText?: string
  className?: string
}

export default function LeadMagnetForm({
  leadType = "website_audit",
  buttonText = "Submit",
  className = "",
}: LeadMagnetFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    companyName: "",
    websiteUrl: "",
    phone: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, leadType }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setStatusMessage(result.message)
        // Reset form
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          companyName: "",
          websiteUrl: "",
          phone: "",
        })
      } else {
        setSubmitStatus("error")
        setStatusMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setStatusMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <Input
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <Input
          type="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
          className="w-full"
        />

        <Input
          placeholder="Company Name"
          value={formData.companyName}
          onChange={(e) => handleInputChange("companyName", e.target.value)}
          className="w-full"
        />

        <Input
          type="url"
          placeholder="Website URL *"
          value={formData.websiteUrl}
          onChange={(e) => handleInputChange("websiteUrl", e.target.value)}
          required
          className="w-full"
        />

        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="w-full"
        />

        {/* Status Message */}
        {submitStatus !== "idle" && (
          <div
            className={`flex items-center p-4 rounded-lg ${
              submitStatus === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {submitStatus === "success" ? (
              <CheckCircle className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            <span>{statusMessage}</span>
          </div>
        )}

        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
