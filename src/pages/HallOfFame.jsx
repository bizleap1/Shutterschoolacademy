import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { hallOfFameWorks, hallOfFameCategories } from '../data/hallOfFame';

const HallOfFame = () => {
  const [filter, setFilter] = useState('All');

  const filteredWorks = filter === 'All' 
    ? hallOfFameWorks 
    : hallOfFameWorks.filter(work => work.category === filter);

  return (
    <div className="bg-[#050505] min-h-screen font-sans text-white">
      {/* Premium Hero Section */}
      <div className="relative h-[400px] md:h-[500px] flex flex-col items-center justify-center px-4 md:px-12 pt-20 overflow-hidden">
        {/* Subtle background glow/texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#050505] opacity-80"></div>
        
        <div className="relative z-10 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-black uppercase tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6"
          >
            Hall of Fame
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-manrope font-light max-w-2xl mx-auto"
          >
            Celebrating the finest frames captured by our most talented students.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16">
          {hallOfFameCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 md:px-5 py-1.5 md:py-2 rounded-full text-[11px] md:text-sm font-manrope font-semibold tracking-widest uppercase transition-all duration-300 border ${
                filter === category 
                  ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry/Grid Showcase */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative group aspect-[4/5] overflow-hidden rounded-lg bg-white/5 border border-white/5 shadow-2xl"
              >
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                  {work.badge && (
                    <div className="mb-auto self-start">
                      <span className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/50 text-amber-400 text-xs font-bold tracking-wider uppercase rounded-sm backdrop-blur-md">
                        {work.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-heading font-bold text-white mb-1">{work.title}</h3>
                    <p className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-3">By {work.studentName}</p>
                    <p className="text-gray-300 text-sm font-manrope leading-relaxed line-clamp-2 md:line-clamp-none">
                      {work.description}
                    </p>
                    <div className="mt-4 inline-block px-3 py-1 border border-white/20 rounded-full text-xs text-gray-400 uppercase tracking-widest">
                      {work.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredWorks.length === 0 && (
          <div className="text-center text-gray-500 py-20 font-medium tracking-wider uppercase text-sm">
            No masterpieces found for this category yet.
          </div>
        )}
      </div>

      {/* Premium CTA Section */}
      <section 
        className="mt-20 relative text-white py-24 md:py-40 text-center px-6 md:px-12 overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554046920-90dcac024a1e?auto=format&fit=crop&q=80&w=1500')" }}
      >
        {/* Top blend gradient to merge seamlessly with the upper black section */}
        <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-[#050505] to-transparent z-0"></div>

        {/* Subtle Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Subtle Spotlight Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>
        
        <div className="relative z-10 max-w-[1180px] w-full mx-auto flex flex-col items-center justify-center space-y-10">
          <h2 className="font-spartan font-[900] uppercase text-[clamp(1.8rem,8vw,2.5rem)] md:text-[clamp(2.5rem,4vw,4.5rem)] leading-[1.15] md:leading-[0.95] tracking-[-1px] md:tracking-[-2px] text-white px-4 md:px-0">
            YOUR FRAME COULD BE NEXT
          </h2>
          <p className="text-gray-200 text-base md:text-lg font-manrope max-w-2xl mx-auto opacity-90">
            Join our courses, master the art of visual storytelling, and start building a portfolio worth showcasing to the world.
          </p>
          <div className="pt-2">
            <Button to="/courses" variant="primary_light" className="px-12 py-[18px] font-bold text-[13px] tracking-[2px] uppercase hover:scale-[1.03] shadow-[0_0_40px_rgba(255,255,255,0.15)] inline-block">
              Explore Courses
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HallOfFame;
