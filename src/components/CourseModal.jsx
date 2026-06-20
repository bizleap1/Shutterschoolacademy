import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseModal = ({ course, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#0A0A0A] w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl flex flex-col pointer-events-auto overflow-hidden border border-gray-800"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 md:p-8 border-b border-gray-900 bg-[#111]">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {course.badge && (
                      <span className="text-[10px] font-bold tracking-widest uppercase text-white bg-white/10 px-2 py-1 rounded-sm">
                        {course.badge}
                      </span>
                    )}
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">{course.duration}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-heading font-black uppercase tracking-wider text-white">
                    {course.title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors bg-black/50"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content (Scrollable) */}
              <div className="p-6 md:p-8 overflow-y-auto flex-grow custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Left Column: Info & Syllabus */}
                  <div className="lg:col-span-7 space-y-8">
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Course Overview</h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {course.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Detailed Syllabus</h3>
                      {course.syllabusNote && (
                        <div className="mb-4 p-4 bg-[#151515] border-l-2 border-white">
                          <p className="text-xs text-gray-300 font-medium leading-relaxed">{course.syllabusNote}</p>
                        </div>
                      )}
                      <div className="space-y-3">
                        {course.syllabus.map((module, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-4 bg-[#111] border border-gray-900 rounded-sm hover:border-gray-700 transition-colors">
                            <div className="text-gray-600 font-bold text-sm min-w-[24px]">{(idx + 1).toString().padStart(2, '0')}</div>
                            <div className="text-gray-200 text-sm font-medium">{module}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Image & Sticky CTA */}
                  <div className="lg:col-span-5 relative">
                    <div className="sticky top-0 space-y-6">
                      <div className="aspect-[4/3] w-full bg-black rounded-lg overflow-hidden border border-gray-900 shadow-xl">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover opacity-90"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>

                      <div className="bg-[#111] border border-gray-900 p-6 rounded-lg space-y-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest">Ready to start?</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-white" /> Intensive hands-on practice
                          </li>
                          <li className="flex items-center gap-3 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-white" /> Industry expert guidance
                          </li>
                          <li className="flex items-center gap-3 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-white" /> Portfolio building
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-gray-900 bg-[#111] flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest text-center sm:text-left">
                  Have questions? <Link to="/contact" onClick={onClose} className="text-white hover:underline">Contact us</Link>
                </p>
                <Link 
                  to="/contact"
                  onClick={onClose}
                  className="w-full sm:w-auto font-manrope bg-white text-black px-10 py-4 font-bold text-xs tracking-[2px] uppercase hover:bg-gray-200 transition-all duration-300 rounded-sm text-center shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-[1.02]"
                >
                  Enroll Now
                </Link>
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CourseModal;
