"use client"

import Image from "next/image"
import { Dribbble, Twitter, ArrowRight } from "lucide-react"

// Data interfaces
interface Education {
  period: string;
  degree: string;
  institution: string;
}

interface Experience {
  period: string;
  role: string;
  company: string;
}

interface ProfileData {
  name: string;
  bio: string;
  image: string;
  education: Education[];
  experience: Experience[];
}

// Sample data
const profileData: ProfileData = {
  name: "Mr. Vimal Daga",
  bio: "Mr. Vimal Daga, the driving force behind TGS, is on an exclusive India Tour, visiting cities across the country to re-invent technical training. His mission is not only to provide hands-on learning but to bring together industry expert interactions, real-world capstone projects, and valuable industry insights—all in one place. With a focus on practical knowledge and skill development, Mr. Daga is committed to transforming the educational landscape in India. Join him on this journey to elevate your technical expertise and career prospects.",
  image: "/mentor.jpeg",
  education: [
    {
      period: "2004 - 2007",
      degree: "Bachelor Degree in Psychology",
      institution: "University of California"
    },
    {
      period: "2007 - 2009",
      degree: "Master Degree in Designing",
      institution: "University of Texas"
    }
  ],
  experience: [
    {
      period: "2007 - 2017",
      role: "Framer Designer & Developer",
      company: "Redwood Systems"
    },
    {
      period: "2017 - 2023",
      role: "Front-End Developer",
      company: "Larsen & Toubro"
    }
  ]
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#111111] p-4 sm:p-6 md:p-8 lg:p-12 text-white">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Title */}
        <div className="flex items-center gap-2 sm:gap-3 justify-center">
          <span className="text-xl sm:text-2xl text-blue-400">✧</span>
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">SELF-SUMMARY</h1>
          <span className="text-xl sm:text-2xl text-blue-400">✧</span>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Profile Image */}
          <div className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-transform hover:scale-[1.02]">
            <div className="relative w-full md:w-[240px] aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-blue-400/20 to-blue-600/20">
              <Image
                src={profileData.image}
                alt={profileData.name}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 240px"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-6 sm:p-8 flex-1 transition-transform hover:scale-[1.02]">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold">{profileData.name}</h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                {profileData.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* Education */}
          <div className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 transition-transform hover:scale-[1.02]">
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">
              Education
            </h3>
            <div className="space-y-6 sm:space-y-8">
              {profileData.education.map((edu, index) => (
                <div 
                  key={index}
                  className="space-y-2 p-3 sm:p-4 rounded-xl hover:bg-[#222222] transition-all duration-300"
                >
                  <div className="text-gray-400 text-sm">{edu.period}</div>
                  <div className="text-base sm:text-lg font-medium">{edu.degree}</div>
                  <div className="text-gray-500">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 transition-transform hover:scale-[1.02]">
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">
              Experience
            </h3>
            <div className="space-y-6 sm:space-y-8">
              {profileData.experience.map((exp, index) => (
                <div 
                  key={index}
                  className="space-y-2 p-3 sm:p-4 rounded-xl hover:bg-[#222222] transition-all duration-300"
                >
                  <div className="text-gray-400 text-sm">{exp.period}</div>
                  <div className="text-base sm:text-lg font-medium">{exp.role}</div>
                  <div className="text-gray-500">{exp.company}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {/* Profiles */}
          <div className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 
                         hover:bg-[#1E1E1E] transition-all duration-300 hover:scale-[1.02]">
            <div className="flex gap-4">
              <Dribbble className="w-6 sm:w-7 h-6 sm:h-7 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <Twitter className="w-6 sm:w-7 h-6 sm:h-7 text-gray-400 hover:text-white transition-colors cursor-pointer" />
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="text-xs text-gray-400 font-medium">STAY WITH ME</div>
                <div className="text-base sm:text-lg font-medium">Profiles</div>
              </div>
              <button className="w-8 sm:w-10 h-8 sm:h-10 bg-[#222222] rounded-full flex items-center justify-center 
                               cursor-pointer hover:bg-[#2A2A2A] transition-all duration-300 hover:scale-110">
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Let's Work Together */}
          <div className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-6 sm:p-8 flex items-center 
                         hover:bg-[#1E1E1E] transition-all duration-300 hover:scale-[1.02]">
            <div className="space-y-2">
              <span className="text-xl sm:text-2xl text-blue-400">✧</span>
              <h3 className="text-xl sm:text-2xl font-medium leading-tight">
                Let's<br />
                <span className="text-blue-500">work together</span>.
              </h3>
            </div>
          </div>

          {/* Credentials */}
          <div className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 
                         hover:bg-[#1E1E1E] transition-all duration-300 hover:scale-[1.02]">
            <div className="h-6 sm:h-8">
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
                <div className="text-base sm:text-lg font-medium">Credentials</div>
              </div>
              <button className="w-8 sm:w-10 h-8 sm:h-10 bg-[#222222] rounded-full flex items-center justify-center 
                               cursor-pointer hover:bg-[#2A2A2A] transition-all duration-300 hover:scale-110">
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}