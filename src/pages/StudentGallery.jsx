import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryCard from '../components/GalleryCard';
import { galleryImages, galleryCategories } from '../data/gallery';

const StudentGallery = () => {
  const [filter, setFilter] = useState('All');

  const filteredImages = galleryImages;

  return (
    <div className="bg-[#000000] min-h-screen font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Dark Cinematic Header */}
      <div className="relative h-[350px] md:h-[450px] flex flex-col items-center justify-center px-4 md:px-12 pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600')] bg-cover bg-center opacity-20 filter grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-2xl md:text-5xl font-heading font-black uppercase tracking-[0.1em] text-white mb-6 md:mb-10">STUDENT GALLERY</h1>
          
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Gallery Grid */}
        <motion.div layout className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative group"
              >
                <GalleryCard image={img} index={index} />
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 rounded-sm pointer-events-none"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredImages.length === 0 && (
          <div className="text-center text-gray-500 py-20 font-medium tracking-wider uppercase text-sm">
            No images found for this category yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentGallery;
