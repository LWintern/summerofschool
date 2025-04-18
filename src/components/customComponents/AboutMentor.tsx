"use client"

import Image from "next/image"
import { Dribbble, Twitter } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#111111] p-8 md:p-12 text-white">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Self Summary Title (Outside of cards) */}
        <div className="flex items-center gap-3 justify-center">
          <span className="text-2xl text-blue-400">✧</span>
          <h1 className="text-2xl font-bold tracking-wide">SELF-SUMMARY</h1>
          <span className="text-2xl text-blue-400">✧</span>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Image Card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-6">
            <div className="relative w-[240px] h-[240px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-400/20 to-blue-600/20">
              <Image
                src="/profile-image.jpg"
                alt="David Henderson"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Profile Info Card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 flex-1">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">David Henderson</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I am a frontend-based product designer with a focus on web design,
                illustration, & visual development. I have a diverse range of experience having
                worked across various fields and industries.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Experience Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 space-y-6">
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">
              Education
            </h3>
            <div className="space-y-8">
              <div className="space-y-2 p-4 rounded-xl hover:bg-[#222222] transition-colors">
                <div className="text-gray-400 text-sm">2004 - 2007</div>
                <div className="text-lg font-medium">Bachelor Degree in Psychology</div>
                <div className="text-gray-500">University of California</div>
              </div>
              <div className="space-y-2 p-4 rounded-xl hover:bg-[#222222] transition-colors">
                <div className="text-gray-400 text-sm">2007 - 2009</div>
                <div className="text-lg font-medium">Master Degree in Designing</div>
                <div className="text-gray-500">University of Texas</div>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 space-y-6">
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">
              Experience
            </h3>
            <div className="space-y-8">
              <div className="space-y-2 p-4 rounded-xl hover:bg-[#222222] transition-colors">
                <div className="text-gray-400 text-sm">2007 - 2017</div>
                <div className="text-lg font-medium">Framer Designer & Developer</div>
                <div className="text-gray-500">Redwood Systems</div>
              </div>
              <div className="space-y-2 p-4 rounded-xl hover:bg-[#222222] transition-colors">
                <div className="text-gray-400 text-sm">2017 - 2023</div>
                <div className="text-lg font-medium">Front-End Developer</div>
                <div className="text-gray-500">Larsen & Toubro</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Profiles Card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 space-y-6 hover:bg-[#1E1E1E] transition-colors">
            <div className="flex gap-4">
              <Dribbble className="w-7 h-7 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <Twitter className="w-7 h-7 text-gray-400 hover:text-white transition-colors cursor-pointer" />
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="text-xs text-gray-400 font-medium">STAY WITH ME</div>
                <div className="text-lg font-medium">Profiles</div>
              </div>
              <div className="w-10 h-10 bg-[#222222] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2A2A2A] transition-colors">
                <span className="text-lg">→</span>
              </div>
            </div>
          </div>

          {/* Let's Work Together Card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 flex items-center hover:bg-[#1E1E1E] transition-colors">
            <div className="space-y-2">
              <span className="text-2xl text-blue-400">✧</span>
              <h3 className="text-2xl font-medium leading-tight">
                Let's<br />
                <span className="text-blue-500">work together</span>.
              </h3>
            </div>
          </div>

          {/* Credentials Card */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 space-y-6 hover:bg-[#1E1E1E] transition-colors">
            <div className="h-8">
              <Image
                src="/signature.png"
                alt="Signature"
                width={120}
                height={32}
                className="opacity-70"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="text-xs text-gray-400 font-medium">MORE ABOUT ME</div>
                <div className="text-lg font-medium">Credentials</div>
              </div>
              <div className="w-10 h-10 bg-[#222222] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#2A2A2A] transition-colors">
                <span className="text-lg">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}