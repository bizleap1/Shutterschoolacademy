import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course, index, onViewSyllabus }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-[#E8E3D8] hover:border-gray-300 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] text-[#111111] flex flex-col h-full group hover:-translate-y-2 transition-all duration-500 overflow-hidden rounded-3xl"
    >
      <div className="aspect-[4/3] w-full bg-black relative overflow-hidden flex items-center justify-center">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          onError={(e) => {
             e.target.style.display = 'none';
          }}
        />
        {/* Badge */}
        {course.badge && (
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/10">
            {course.badge}
          </div>
        )}
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow relative">
        {/* Duration */}
        <div className="flex items-center gap-1.5 text-gray-500 mb-4">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-[10px] font-bold tracking-widest uppercase">{course.duration}</span>
        </div>

        <h3 className="text-xl font-heading font-black uppercase tracking-wider mb-2 text-[#111111]">{course.title}</h3>
        <p className="text-[#555] text-xs font-bold uppercase tracking-widest mb-4 opacity-80">{course.subtitle}</p>
        
        <p className="text-[#333] text-sm mb-8 flex-grow leading-relaxed">
          {course.description}
        </p>
        
        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button 
            onClick={() => onViewSyllabus ? onViewSyllabus() : window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="w-full py-3.5 text-center border border-[#111] text-[#111] text-[10px] font-bold uppercase tracking-widest hover:bg-[#111] hover:text-white transition-colors duration-300 rounded-xl"
          >
            View Syllabus
          </button>
          <Link 
            to="/contact" 
            className="w-full py-3.5 text-center bg-[#111] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-colors duration-300 rounded-xl shadow-lg hover:shadow-xl"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
