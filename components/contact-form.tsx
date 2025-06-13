"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    projectType: "",
    budgetRange: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(result.message);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          companyName: "",
          projectType: "",
          budgetRange: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          result.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <Input
            placeholder="John"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <Input
            placeholder="Doe"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <Input
          type="email"
          placeholder="john@company.com"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <Input
          type="tel"
          placeholder="+91 9653-563-214"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Company Name
        </label>
        <Input
          placeholder="Your Company"
          value={formData.companyName}
          onChange={(e) => handleInputChange("companyName", e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Type *
        </label>
        <Select
          value={formData.projectType}
          onValueChange={(value) => handleInputChange("projectType", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new-website">New Website</SelectItem>
            <SelectItem value="redesign">Website Redesign</SelectItem>
            <SelectItem value="ecommerce">E-commerce Store</SelectItem>
            <SelectItem value="landing-page">Landing Page</SelectItem>
            <SelectItem value="web-app">Web Application</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Budget Range
        </label>
        <Select
          value={formData.budgetRange}
          onValueChange={(value) => handleInputChange("budgetRange", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select budget range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-5k">Under $5,000</SelectItem>
            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
            <SelectItem value="50k-plus">$50,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Details *
        </label>
        <Textarea
          placeholder="Tell us about your project, goals, and any specific requirements..."
          rows={4}
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          required
        />
      </div>

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

      <Button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 py-3 text-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
}
