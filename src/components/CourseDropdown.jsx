import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { courses } from '../data/courses';

const CourseDropdown = ({ isOpen, isMobile, closeMobileMenu }) => {
  const handleClick = () => {
    if (closeMobileMenu) {
      closeMobileMenu();
    }
  };

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-black/50 backdrop-blur-md border-t border-b border-white/10"
          >
            <div className="py-2 px-2">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  to="/courses"
                  onClick={handleClick}
                  className="block p-4 mb-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold tracking-wide">{course.title}</span>
                    <span className="text-[10px] uppercase tracking-widest bg-white/10 px-2 py-1 rounded-full text-gray-300">{course.duration}</span>
                  </div>
                </Link>
              ))}
              <div className="p-4 mt-2">
                <Link to="/courses" onClick={handleClick} className="w-full py-3 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                  View All Courses <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full left-0 mt-4 w-[420px] bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] ring-1 ring-white/5 z-50 rounded-2xl overflow-hidden"
        >
          <div className="p-5 flex justify-between items-center border-b border-white/5">
            <h3 className="text-xs font-bold text-white/50 uppercase tracking-[0.2em]">Our Courses</h3>
            <span className="text-xs text-white/30">{courses.length} Programs</span>
          </div>
          <div className="flex flex-col p-2">
            {courses.map((course) => (
              <Link
                key={course.id}
                to="/courses"
                className="group relative flex flex-col p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="relative z-10 flex justify-between items-center mb-2">
                  <h4 className="text-[15px] font-bold text-white/80 group-hover:text-white transition-colors">{course.title}</h4>
                  <span className="text-[9px] uppercase tracking-widest text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full group-hover:bg-white/10 transition-colors">{course.duration}</span>
                </div>
                <div className="relative z-10 flex justify-between items-end gap-4">
                  <p className="text-xs text-white/40 group-hover:text-white/60 line-clamp-2 leading-relaxed transition-colors">
                    {course.description}
                  </p>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white text-white group-hover:text-black transition-all duration-300 transform group-hover:scale-110">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="p-2">
            <Link to="/courses" className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 hover:bg-white text-white hover:text-black rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 group">
              View Full Course Catalog 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CourseDropdown;
