import { motion } from 'framer-motion';

const GalleryCard = ({ image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative group overflow-hidden aspect-[4/5] bg-[#151515] cursor-pointer"
    >
      <div className="absolute inset-0 bg-[#080808] z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      
      <img 
        src={image.src} 
        alt={image.category}
        className="absolute inset-0 w-full h-full object-cover z-0 transform group-hover:scale-110 transition-transform duration-700 ease-out mix-blend-luminosity hover:mix-blend-normal"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextElementSibling.style.display = 'flex';
        }}
      />
      
      {/* Fallback gradient if image is missing */}
      <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#151515] to-[#222222]">
        <span className="text-xs uppercase tracking-widest text-[#555555] font-bold">Image Preview</span>
      </div>
      
      <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-xs font-heading font-bold tracking-widest text-[#F7F7F7] uppercase">
          {image.category}
        </span>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
