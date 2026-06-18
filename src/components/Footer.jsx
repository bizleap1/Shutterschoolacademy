import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#080808] text-[#F7F7F7] pt-20 pb-10 border-t border-[#3A3A3A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 mb-12 md:mb-20 font-manrope">
          
          <div className="col-span-1 sm:col-span-2 md:col-span-12 lg:col-span-4 pr-0 lg:pr-10">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <img 
                src="/logo.png" 
                alt="Shutter School Logo" 
                className="h-14 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <span className="hidden text-xl font-heading font-bold tracking-[0.2em] uppercase">
                Shutter <span className="font-light text-[#B8B8B8]">School</span>
              </span>
            </Link>
            <p className="text-[#B8B8B8] text-[15px] mb-8 leading-relaxed">
              Bridging the gap between classroom theory, real-world execution, and sustainable business growth.
            </p>
          </div>

          <div className="col-span-1 md:col-span-4 lg:col-span-2">
            <h3 className="text-sm font-spartan font-bold mb-6 md:mb-8 tracking-widest uppercase text-[#777777]">Quick Links</h3>
            <ul className="space-y-4 md:space-y-6">
              <li><Link to="/courses" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-[15px] font-medium">Courses</Link></li>
              <li><Link to="/student-gallery" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-[15px] font-medium">Student Gallery</Link></li>
              <li><Link to="/about" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-[15px] font-medium">About Us</Link></li>
              <li><Link to="/contact" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-[15px] font-medium">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <h3 className="text-sm font-spartan font-bold mb-6 md:mb-8 tracking-widest uppercase text-[#777777]">Courses</h3>
            <ul className="space-y-4 md:space-y-6">
              <li><Link to="/courses" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-[15px] font-medium">Foundation Course</Link></li>
              <li><Link to="/courses" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-[15px] font-medium">Content Creation Course</Link></li>
              <li><Link to="/courses" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-[15px] font-medium">Prime Course</Link></li>
              <li><Link to="/courses" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-[15px] font-medium">Expert Course</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <h3 className="text-sm font-spartan font-bold mb-6 md:mb-8 tracking-widest uppercase text-[#777777]">Contact Us</h3>
            <ul className="space-y-4 md:space-y-6 text-[15px] font-medium text-[#F7F7F7]">
              <li>+91 9619994477</li>
              <li>+91 9619994466</li>
              <li>
                <a href="mailto:shutterschoolindia@gmail.com" className="hover:text-[#B8B8B8] transition-colors tracking-wide break-all">shutterschoolindia@gmail.com</a>
              </li>
              <li className="text-[#B8B8B8] font-normal pt-2 leading-relaxed max-w-[250px]">Shakti Nagar, Dahisar East, Mumbai</li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-[#3A3A3A] flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-[#888888] font-manrope font-medium tracking-wide">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shutter School India. All rights reserved.
          </p>
          <div className="flex space-x-6 md:space-x-8 justify-center">
            <a href="#" className="hover:text-[#F7F7F7] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F7F7F7] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
