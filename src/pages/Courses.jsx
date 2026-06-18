import { useState, useRef } from 'react';
import CourseCard from '../components/CourseCard';
import CourseSyllabus from '../components/CourseSyllabus';
import { courses } from '../data/courses';

const Courses = () => {
  const [activeCourseId, setActiveCourseId] = useState(undefined);
  const handleViewSyllabus = (courseId) => {
    setActiveCourseId(courseId);
    setTimeout(() => {
      const element = document.getElementById('syllabus-section');
      if (element) {
        // Offset for sticky nav
        const yOffset = -80; 
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-[#F5F2EC] min-h-screen">
      {/* Dark Header Banner */}
      <div className="bg-[#080808] h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center px-6 md:px-12 pt-16 border-b border-gray-900">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-widest text-[#F7F7F7] mb-6">Our Courses</h1>
          <p className="text-xs md:text-sm text-[#B8B8B8] max-w-2xl mx-auto uppercase tracking-widest font-medium leading-relaxed">
            Choose the learning path that matches your current skill level and creative goals.
          </p>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {courses.map((course, index) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              index={index} 
              onViewSyllabus={() => handleViewSyllabus(course.id)}
            />
          ))}
        </div>
      </div>

      {/* Syllabus Section */}
      <CourseSyllabus 
        activeCourseId={activeCourseId} 
        setActiveCourseId={setActiveCourseId} 
      />
    </div>
  );
};

export default Courses;
