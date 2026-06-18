import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { courses } from '../data/courses';

const CourseSyllabus = ({ activeCourseId: externalActiveCourseId, setActiveCourseId: setExternalActiveCourseId }) => {
  const [localActiveCourseId, setLocalActiveCourseId] = useState(null);
  
  const activeCourseId = externalActiveCourseId !== undefined ? externalActiveCourseId : localActiveCourseId;
  const setActiveCourseId = setExternalActiveCourseId || setLocalActiveCourseId;

  const [openAccordions, setOpenAccordions] = useState(activeCourseId ? { [activeCourseId]: true } : {});

  useEffect(() => {
    if (externalActiveCourseId) {
      setOpenAccordions((prev) => ({ ...prev, [externalActiveCourseId]: true }));
    }
  }, [externalActiveCourseId]);

  const activeCourse = courses.find((c) => c.id === activeCourseId);

  const toggleAccordion = (id) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="syllabus-section" className="py-16 md:py-24 bg-[#0A0A0A] border-t border-gray-900">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-[0.1em] text-white mb-4">Detailed Syllabus</h2>
          <p className="text-sm text-gray-400 uppercase tracking-widest max-w-2xl mx-auto">Explore the complete curriculum breakdown for each of our official programs.</p>
        </div>

        {/* Desktop Layout: Tabs (Left Sidebar + Right Content) */}
        <div className="hidden lg:grid grid-cols-12 gap-12">
          {/* Left Sidebar (Tabs) */}
          <div className="col-span-4 space-y-2">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setActiveCourseId(course.id)}
                className={`w-full text-left p-6 flex flex-col transition-all duration-300 border-l-2 ${
                  activeCourseId === course.id
                    ? 'bg-[#151515] border-white text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                    : 'bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-[#111111]'
                }`}
              >
                <span className="text-sm font-bold uppercase tracking-wider mb-1">{course.title}</span>
                <span className="text-[11px] uppercase tracking-widest opacity-60">{course.duration}</span>
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="col-span-8 bg-[#111111] border border-gray-900 p-10 rounded-sm">
            {activeCourse ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCourse.id}
                  initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8 pb-8 border-b border-gray-800">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{activeCourse.title}</h3>
                  <p className="text-sm text-gray-400">{activeCourse.description}</p>
                  {activeCourse.syllabusNote && (
                    <div className="mt-4 p-4 bg-[#1A1A1A] border-l-2 border-white">
                      <p className="text-xs text-gray-300 font-medium">{activeCourse.syllabusNote}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  {activeCourse.syllabus.map((module, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-[#151515] border border-gray-900 hover:border-gray-700 transition-colors">
                      <div className="text-gray-600 font-bold text-sm min-w-[24px]">{(index + 1).toString().padStart(2, '0')}</div>
                      <div className="text-gray-200 text-sm font-medium">{module}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500 text-sm uppercase tracking-widest min-h-[300px]">
                Select a course to view its detailed syllabus
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout: Accordions */}
        <div className="lg:hidden space-y-4">
          {courses.map((course) => {
            const isOpen = openAccordions[course.id];
            return (
              <div key={course.id} className="bg-[#111111] border border-gray-900 rounded-sm overflow-hidden">
                <button
                  onClick={() => toggleAccordion(course.id)}
                  className="w-full text-left p-6 flex justify-between items-center bg-[#151515]"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white uppercase tracking-wider mb-1">{course.title}</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">{course.duration}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 border-t border-gray-900">
                        <p className="text-xs text-gray-400 mb-6">{course.description}</p>
                        
                        {course.syllabusNote && (
                          <div className="mb-6 p-4 bg-[#1A1A1A] border-l-2 border-white">
                            <p className="text-xs text-gray-300 font-medium">{course.syllabusNote}</p>
                          </div>
                        )}

                        <div className="space-y-2">
                          {course.syllabus.map((module, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-[#0A0A0A] border border-gray-900">
                              <div className="text-gray-600 font-bold text-xs min-w-[20px]">{(index + 1).toString().padStart(2, '0')}</div>
                              <div className="text-gray-300 text-xs">{module}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CourseSyllabus;
