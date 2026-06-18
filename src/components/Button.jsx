import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ children, to, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "inline-flex items-center justify-center px-[28px] h-[42px] font-bold uppercase tracking-wider text-[12px] transition-all duration-300 border rounded-[2px]";
  
  const variants = {
    primary: "bg-[#080808] text-[#F7F7F7] border-[#080808] hover:bg-[#222222] hover:border-[#222222]",
    primary_light: "bg-[#F7F7F7] text-[#111111] border-[#F7F7F7] hover:bg-[#B8B8B8] hover:border-[#B8B8B8] hover:text-[#080808]",
    secondary: "bg-transparent text-[#111111] border-[rgba(17,17,17,0.5)] hover:bg-[#111111] hover:text-[#F7F7F7]",
    secondary_dark: "bg-transparent text-[#F7F7F7] border-[rgba(247,247,247,0.5)] hover:bg-[#F7F7F7] hover:text-[#111111]",
    dark_outline: "bg-transparent text-[#F7F7F7] border-[#3A3A3A] hover:border-[#F7F7F7] hover:bg-white/5",
  };

  const buttonClasses = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button 
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={buttonClasses} 
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
