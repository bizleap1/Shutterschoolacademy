import { motion } from 'framer-motion';

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center group p-6 flex flex-col items-center bg-white border border-[#D8D3C8] rounded-sm hover:border-[#111111] transition-colors duration-300"
    >
      <div className="mb-6 text-[#111111] group-hover:-translate-y-2 transition-transform duration-300">
        <Icon strokeWidth={1} className="w-12 h-12" />
      </div>
      <h3 className="text-lg font-heading font-bold uppercase tracking-wider text-[#111111] mb-3">{feature.title}</h3>
      <p className="text-[#555555] text-sm leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
};

export default FeatureCard;
