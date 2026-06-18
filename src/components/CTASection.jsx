import { motion } from 'framer-motion';
import Button from './Button';

const CTASection = () => {
  return (
    <section className="h-[150px] bg-[#E5DCD0] flex items-center border-t border-[#D8D3C8]">
      <div className="max-w-[1180px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-[20px] md:text-[22px] font-heading font-bold text-[#111111] uppercase tracking-wide leading-tight mb-4 md:mb-0">
          Ready to turn your passion <br className="hidden md:block"/> into a profession?
        </h2>
        <Button to="/contact" variant="primary">
          Enroll Now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
