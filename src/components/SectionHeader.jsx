import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = false, dark = false }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-heading font-bold uppercase tracking-widest mb-4 ${dark ? 'text-[#F7F7F7]' : 'text-[#111111]'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg max-w-2xl mt-4 ${centered ? 'mx-auto' : ''} ${dark ? 'text-[#B8B8B8]' : 'text-[#555555]'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
