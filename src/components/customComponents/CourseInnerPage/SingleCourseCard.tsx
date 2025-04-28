


// /src/components/customComponents/CourseInnerPage/SingleCourseCard.tsx

import mentorImage from '@/assets/gallery/mentor.jpeg';
import Image from "next/image";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface Props {
  course: any
}

export default function SingleCourseCard({ course }: Props) {
  return (
    <div className="max-w-3xl mx-auto shadow-lg rounded-xl border border-gray-200 bg-[#494F52] mt-10">
      <div className="p-6">
        <div className="flex w-full items-start gap-4">
          <div className="flex flex-col items-center">
            <img
              src={course.imageSrc}
              alt={course.title}
              className="rounded-full w-12 h-12 mb-2"
            />
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm">
              {course.time}
            </span>
          </div>
          <div className="flex-1">
            <div className="text-left mb-1">
              <h3 className="text-lg font-semibold text-white">
                {course.title}
              </h3>
              <p className="text-sm text-white">{course.description}</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                Mr. Vimal Daga
              </span>
              <span className="text-sm text-green-200">
                {`${course.duration}`} mins session
              </span>
            </div>
          </div>
          {/* Mentor avatar */}
          <div className="flex-shrink-0 items-center">
            <img
              src={mentorImage.src}
              alt="Mentor"
              className="rounded-full ml-4 w-20 h-20 border-yellow-400 p-2"
            />
            <Badge className="bg-yellow-100 text-yellow-800 hover:text-yellow-900 font-bold mt-1">
              Mr. Vimal Daga
            </Badge>
          </div>
        </div>
        {/* Course Sections */}
        <div className="mt-8">
          <Accordion type="single" collapsible className="space-y-2">
            {course.sections.map((section: any, sectionIndex: number) => (
              <AccordionItem
                key={`section-${sectionIndex}`}
                value={`section-${sectionIndex}`}
                className="border border-gray-100 rounded-lg"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-medium">
                      {sectionIndex + 1}
                    </div>
                    <div className="text-left flex-1 ">
                      <h3 className="font-semibold text-white text-sm">{section.subheading}</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-16 py-2">
                  <ul className="space-y-2">
                    {section.points.map((point: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <span className="text-green-400">{point}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}