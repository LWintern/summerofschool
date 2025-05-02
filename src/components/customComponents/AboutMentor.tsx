"use client"

import Image from "next/image"
import { Dribbble, Twitter, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

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
  image: "/assets/mentor.jpeg",
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
  experience: []
}

export default function Portfolio() {
  const [position, setPosition] = useState(0);
  
  const companies = [
    { name: 'Dell', logo: '🔵 Dell' },
    { name: 'IBM', logo: '🔵 IBM' },
    { name: 'Google', logo: '🔵 Google' },
    { name: 'Infosys', logo: '🔵 Infosys' },
    { name: 'Salesforce', logo: '🔵 Salesforce' },
    { name: 'Razorpay', logo: '🔵 Razorpay' }
  ];
  
  // Duplicate array to create seamless loop
  const extendedCompanies = [...companies, ...companies];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        // Reset position when we've moved far enough to show the duplicates
        if (prev > companies.length * 100) {
          return 0;
        }
        return prev + 0.5;
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, [companies.length]);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-12 text-white">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Title */}
        <div className="flex items-center gap-2 sm:gap-3 justify-center text-black">
          <span className="text-xl sm:text-2xl text-blue-400">✧</span>
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">Mentor</h1>
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

       {/* Program Benefits */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {/* Program Benefits */}
              <div className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-6 sm:p-8 space-y-2 sm:space-y-2 transition-transform hover:scale-[1.02]">
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                  Program Benefits
                </h3>
                <div className="space-y-2 sm:space-y-2">
                  <div className="space-y-2 p-3 sm:p-4 rounded-xl hover:bg-[#222222] transition-all duration-300">
                    <div className="text-base sm:text-lg font-medium">Industry Expert Interactions</div>
                    <div className="text-gray-500">Learn directly from thought leaders who are shaping the DevOps landscape.</div>
                  </div>
                  
                  <div className="space-y-2 p-3 sm:p-4 rounded-xl hover:bg-[#222222] transition-all duration-300">
                    <div className="text-base sm:text-lg font-medium">Real-World Capstone Projects</div>
                    <div className="text-gray-500">Gain practical experience by working on projects aligned with current industry demands.</div>
                  </div>
                  
                  <div className="space-y-2 p-3 sm:p-4 rounded-xl hover:bg-[#222222] transition-all duration-300">
                    <div className="text-base sm:text-lg font-medium">Valuable Industry Insights</div>
                    <div className="text-gray-500">Understand the latest DevOps trends, tools, and practices to stay ahead in the competitive tech world.</div>
                  </div>
                </div>
              </div>

          {/* Experience */}
          <div className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-transform hover:scale-[1.02]">
              <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
                Achievements
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  "World Record Holder",
                  "Senior Principal IT Consultant",
                  "22+ Years of Rich Experience", 
                  "Two-Time TEDx Speaker",
                  "Philanthropist"
                ].map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#222222] transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-sm sm:text-base">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>
{/* Bottom Cards */}
<div className="grid md:grid-cols-3 gap-2 sm:gap-2">
  {/* Social Media Stats Box */}
  <div className="bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-6 sm:p-8 
                 hover:bg-[#1E1E1E] transition-all duration-300 hover:scale-[1.02]">
    <div className="flex justify-between items-center gap-2">
      {/* YouTube */}
      <a href="https://youtube.com/yourprofile" className="flex flex-col items-center">
        <svg className="w-5 h-5 text-red-600 mb-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        <div className="text-white font-medium text-sm">300,000+</div>
        <div className="text-gray-400 text-xs">subscribers</div>
      </a>
      
      {/* Instagram */}
      <a href="https://instagram.com/yourprofile" className="flex flex-col items-center">
        <svg className="w-5 h-5 text-pink-500 mb-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
        <div className="text-white font-medium text-sm">1,100,000+</div>
        <div className="text-gray-400 text-xs">followers</div>
      </a>
      
      {/* LinkedIn */}
      <a href="https://linkedin.com/in/yourprofile" className="flex flex-col items-center">
        <svg className="w-5 h-5 text-blue-500 mb-1" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        <div className="text-white font-medium text-sm">60,000+</div>
        <div className="text-gray-400 text-xs">followers</div>
      </a>
    </div>
    
    {/* <div className="flex justify-between items-center mt-5">
      <div className="space-y-1">
        <div className="text-xs text-gray-400 font-medium">STAY WITH ME</div>
        <div className="text-base sm:text-lg font-medium">Profiles</div>
      </div>
      <button className="w-8 sm:w-10 h-8 sm:h-10 bg-[#222222] rounded-full flex items-center justify-center 
                       cursor-pointer hover:bg-[#2A2A2A] transition-all duration-300 hover:scale-110">
        <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div> */}
  </div>
          {/* Let's Work Together */}
          <div className="w-[600px] bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-2 sm:p-4 flex flex-col gap-4 hover:bg-[#1E1E1E] transition-all duration-300 hover:scale-[1.02]">
            <h4 className="font-medium mb-2 text-white text-center">
              Companies benefited with his trainings & consultancy
            </h4>

            <div className="relative overflow-hidden h-6 w-[500px]">
              <div 
                className="flex items-center absolute"
                style={{ 
                  transform: `translateX(-${position}px)`,
                  transition: 'transform 0.5s linear'
                }}
              >
                {extendedCompanies.map((company, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center mx-2 min-w-[100px]"
                  >
                    <div className="text-blue-500 font-bold text-sm">{company.logo}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}