import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import { courses } from '../data/courses';

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === courseId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) {
    return (
      <div className="bg-[#000000] text-white min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
        <button onClick={() => navigate('/courses')} className="text-gray-400 hover:text-white underline">
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans pb-24" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Banner */}
      <header className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 bg-[#050505] border-b border-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none"></div>
        <div 
          className="absolute inset-0 opacity-20 filter blur-xl scale-110 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${course.image}')` }}
        ></div>
        
        <div className="max-w-5xl mx-auto relative z-20">
          <Link to="/courses" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm uppercase tracking-widest font-bold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Courses
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            {course.badge && (
              <span className="text-[10px] font-bold tracking-widest uppercase text-white bg-white/10 px-3 py-1.5 rounded-sm border border-white/10">
                {course.badge}
              </span>
            )}
            <div className="flex items-center gap-1.5 text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="text-[11px] font-bold tracking-widest uppercase">{course.duration}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-wider text-white mb-6 leading-tight">
            {course.title}
          </h1>
          <p className="text-xl text-gray-400 font-medium tracking-wide max-w-2xl">
            {course.subtitle}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Info & Syllabus */}
          <div className="lg:col-span-7 space-y-12">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Course Overview</h2>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {course.description}
              </p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Detailed Syllabus</h2>
              {course.syllabusNote && (
                <div className="mb-6 p-5 bg-[#111] border-l-2 border-white rounded-sm">
                  <p className="text-sm text-gray-300 font-medium leading-relaxed">{course.syllabusNote}</p>
                </div>
              )}
              <div className="space-y-4">
                {course.syllabus.map((module, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 bg-[#0A0A0A] border border-gray-900 rounded-sm hover:border-gray-700 transition-colors">
                    <div className="text-gray-600 font-bold text-base min-w-[28px]">{(idx + 1).toString().padStart(2, '0')}</div>
                    <div className="text-gray-200 text-base font-medium">{module}</div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column: Sticky Sidebar with Image & CTA */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sticky top-32 space-y-8"
            >
              <div className="aspect-[4/3] w-full bg-[#0A0A0A] rounded-sm overflow-hidden border border-gray-900 shadow-2xl">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              <div className="bg-[#0A0A0A] border border-gray-900 p-8 rounded-sm shadow-xl">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Ready to start?</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-sm text-gray-400 font-medium tracking-wide">
                    <CheckCircle className="w-5 h-5 text-white" /> Intensive hands-on practice
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400 font-medium tracking-wide">
                    <CheckCircle className="w-5 h-5 text-white" /> Industry expert guidance
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400 font-medium tracking-wide">
                    <CheckCircle className="w-5 h-5 text-white" /> Portfolio building
                  </li>
                </ul>
                
                <Link 
                  to="/contact"
                  className="w-full block font-manrope bg-white text-black px-10 py-5 font-bold text-[13px] tracking-[2px] uppercase hover:bg-gray-200 transition-all duration-300 rounded-sm text-center shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-[1.02]"
                >
                  Enroll Now
                </Link>
                <p className="text-xs text-gray-500 uppercase tracking-widest text-center mt-6">
                  Have questions? <Link to="/contact" className="text-white hover:underline">Contact us</Link>
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
