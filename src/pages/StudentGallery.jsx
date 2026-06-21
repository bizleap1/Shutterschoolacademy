import { motion, useScroll, useTransform } from 'framer-motion';
import { students } from '../data/students';

const StudentGallery = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity1 = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="bg-[#050505] min-h-screen font-sans text-white pb-32 overflow-hidden">
      {/* Dark Cinematic Header with Parallax */}
      <div className="relative h-[350px] md:h-[450px] flex flex-col items-center justify-center px-4 md:px-12 pt-20 overflow-hidden">
        <motion.div 
          style={{ y: y1, opacity: opacity1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-800/30 via-[#050505] to-[#050505]"
        ></motion.div>
        
        <div className="relative z-10 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-heading font-black uppercase tracking-[0.1em] text-white mb-6 drop-shadow-2xl"
          >
            Our Masters
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-lg md:text-xl font-manrope font-light max-w-2xl mx-auto"
          >
            Meet the passionate Masters who shaped their vision of photography through Shutter School Academy.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
        {/* Student Profiles List (Large Vertical Cards) */}
        <div className="flex flex-col gap-16 md:gap-24">
          {students.map((student, index) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-0 bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors duration-700 overflow-hidden rounded-md shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(255,255,255,0.02)] relative group"
            >
              {/* Image Section */}
              <div className={`w-full md:w-[40%] ${student.containerClassName || 'aspect-[3/4]'} md:aspect-auto relative shrink-0 overflow-hidden bg-black`}>
                <motion.div
                  initial={{ scale: 1.12 }}
                  whileHover={{ scale: 1.18 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full origin-center"
                >
                  <img 
                    src={student.image} 
                    alt={student.name} 
                    className={`w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ${student.imagePosition || 'object-[center_15%]'}`}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-60 md:hidden pointer-events-none"></div>
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-[#0A0A0A]/20 to-[#0A0A0A] opacity-70 pointer-events-none"></div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-[60%] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-[#0A0A0A]">
                {/* Subtle Stardust texture background */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex flex-col h-full"
                >
                  {student.instagramUrl ? (
                    <a 
                      href={student.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mb-3 w-max"
                    >
                      <h3 className="text-3xl md:text-4xl font-heading font-bold text-white hover:text-gray-300 transition-colors drop-shadow-md">
                        {student.name}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3 drop-shadow-md">
                      {student.name}
                    </h3>
                  )}
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-amber-500/80 text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] mb-8"
                  >
                    {student.role}
                  </motion.p>
                  
                  <div className="text-gray-400 text-sm md:text-[15px] font-manrope leading-[1.9] mb-8 md:mb-12">
                    <p>{student.description}</p>
                  </div>
                  
                  <div className="mt-auto">
                    {student.instagramUrl && (
                      <div className="pt-8 border-t border-white/5 relative overflow-hidden group/cta">
                        {/* Shimmer effect line */}
                        <div className="absolute top-0 left-[-100%] w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent group-hover/cta:left-[100%] transition-all duration-1000 ease-in-out"></div>
                        
                        <a 
                          href={student.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 text-sm transition-colors w-max"
                        >
                          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/cta:bg-white group-hover/cta:text-black group-hover/cta:border-white transition-all duration-500 hover:scale-110">
                            <svg className="w-5 h-5 -rotate-45 group-hover/cta:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-1 group-hover/cta:text-amber-500/70 transition-colors duration-300">{student.ctaText}</span>
                            <span className="text-white font-medium tracking-widest text-[13px] group-hover/cta:text-gray-300 transition-colors duration-300">{student.instagramUsername}</span>
                          </div>
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentGallery;
