





// /src/app/courses/[slug]/page.tsx
import InnerCourseHeroPage from "@/components/customComponents/CourseInnerPage/InnerCourseHeroPage";
import { courseData } from "../../../../data/courseContent";
import SingleCourseCard from "@/components/customComponents/CourseInnerPage/SingleCourseCard";

export default function CourseSlugPage({ params }: { params: { slug: string } }) {
  const course = courseData.find(c => c.slug === params.slug);

  if (!course) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <h2 className="text-2xl text-red-600 font-bold">Course not found</h2>
      </div>
    );
  }

  return (
    <main>
      {/* Always show the hero/header */}
      <InnerCourseHeroPage  />

      {/* Optional: Main heading and description below hero, or move this into InnerCourseHeroPage */}
      <div className="mt-6">
        <h1 className="text-3xl font-extrabold text-center text-black mb-4">
          {course.title}
        </h1>
        {course.description && (
          <p className="text-lg max-w-2xl text-center text-gray-800 mx-auto mb-6">
            {course.description}
          </p>
        )}
      </div>

      {/* Module Cards or Single Legacy Card */}
      {course.modules && course.modules.length > 0 ? (
        course.modules.map((mod, idx) => (
          <SingleCourseCard
            key={mod.title}
            course={{
              ...mod,
              // Inherit these core props for styling/timing/etc
              imageSrc: course.imageSrc,
              duration: course.duration,
              time: course.time,
              // Optionally: description: mod.description,
            }}
          />
        ))
      ) : (
        <SingleCourseCard course={course} />
      )}
    </main>
  );
}