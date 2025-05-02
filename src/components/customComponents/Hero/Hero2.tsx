



"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { courseData } from "../../../../data/courseContent"; // <-- Adjust path if you move file

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  query: string;
}

const Hero2 = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    query: ""
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');
      await response.json();
      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        college: "",
        query: ""
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#520000] via-[#710000] via-[#a50000] to-[#ce0000] relative overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-red-950/30 to-black/95 z-0"
        style={{
          backgroundImage: "url('/assets/Hero/background-texture.jpg')",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          opacity: 0.9
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left section */}
          <div className="w-full md:w-3/5 space-y-6">
            <div className="text-white">
              <p className="text-xl mb-2">Exclusively for Engineering Students</p>
              <h1 className="text-red-600 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Summer Industrial
                <br />
                Training Program
              </h1>
              {/* COURSE CHIPS */}
              <div className="mt-8 flex flex-wrap gap-4">
                {courseData.map((course) => (
                  <Link
                    key={course.slug}
                    href={`/courses/${course.slug}`}
                    className="bg-white text-black rounded-full px-6 py-3 text-sm md:text-base font-semibold hover:bg-red-700 transition duration-300"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Right section - Contact form */}
          <div className="w-full md:w-2/5">
            <div className="bg-transparent border-2 border-white p-8 rounded">
              <h2 className="text-2xl mb-6 text-center text-white font-bold">Contact Us</h2>
              {submitStatus === "success" && (
                <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">
                  Thank you! Your query has been submitted.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-4 p-2 bg-red-100 text-red-800 rounded">
                  Error submitting form. Please try again.
                </div>
              )}
              <div className="space-y-4">
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  disabled={loading}
                  className="bg-white text-black border-white placeholder:text-gray-400"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}

                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={loading}
                  className="bg-white text-black border-white placeholder:text-gray-400"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={loading}
                  maxLength={10}
                  className="bg-white text-black border-white placeholder:text-gray-400"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}

                <Textarea
                  name="query"
                  placeholder="Your Query"
                  value={formData.query}
                  onChange={handleInputChange}
                  disabled={loading}
                  className="bg-white text-black border-white placeholder:text-gray-400 min-h-[100px]"
                />

                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white border-none"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Query'
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;