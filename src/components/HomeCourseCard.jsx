import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeCourseCard = ({ course, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-[145px] bg-[#151515] rounded-[3px] overflow-hidden group cursor-pointer block"
    >
      <Link to="/courses" className="absolute inset-0 z-20"></Link>
      <img 
        src={course.image || `/images/course-${course.id}.jpg`} 
        alt={course.title}
        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:opacity-80 group-hover:scale-105 group-hover:mix-blend-normal transition-all duration-500"
        onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
        }}
      />
      <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#151515] to-[#222222]">
           <span className="text-[10px] uppercase tracking-widest text-[#555555] font-bold">Preview</span>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/40 to-transparent pointer-events-none" />
      
      <div className="absolute bottom-0 left-0 p-5 z-10">
        <h3 className="text-[13px] font-heading font-bold uppercase tracking-wider text-[#F7F7F7]">{course.title}</h3>
      </div>
    </motion.div>
  );
};

export default HomeCourseCard;
