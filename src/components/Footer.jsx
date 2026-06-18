import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#080808] text-[#F7F7F7] pt-20 pb-10 border-t border-[#3A3A3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src="/logo.png" 
                alt="Shutter School Logo" 
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <span className="hidden text-xl font-heading font-bold tracking-[0.2em] uppercase">
                Shutter <span className="font-light text-[#B8B8B8]">School</span>
              </span>
            </Link>
            <p className="text-[#B8B8B8] text-sm mb-8 leading-relaxed">
              Bridging the gap between classroom theory, real-world execution, and sustainable business growth.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-heading font-bold mb-6 tracking-widest uppercase text-[#555555]">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/courses" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-sm font-semibold">Courses</Link></li>
              <li><Link to="/student-gallery" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-sm font-semibold">Student Gallery</Link></li>
              <li><Link to="/about" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-sm font-semibold">About Us</Link></li>
              <li><Link to="/contact" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-sm font-semibold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-heading font-bold mb-6 tracking-widest uppercase text-[#555555]">Courses</h3>
            <ul className="space-y-4">
              <li><Link to="/courses" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-sm font-semibold">Photography Fundamentals</Link></li>
              <li><Link to="/courses" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-sm font-semibold">Cinematography Essentials</Link></li>
              <li><Link to="/courses" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-sm font-semibold">Lighting Masterclass</Link></li>
              <li><Link to="/courses" className="text-[#F7F7F7] hover:text-[#B8B8B8] transition-colors text-sm font-semibold">Business of Photography</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-heading font-bold mb-6 tracking-widest uppercase text-[#555555]">Contact Us</h3>
            <ul className="space-y-4 text-sm font-semibold text-[#F7F7F7]">
              <li>+91 9619994477</li>
              <li>+91 9619994466</li>
              <li>
                <a href="mailto:shutterschoolindia@gmail.com" className="hover:text-[#B8B8B8] transition-colors">shutterschoolindia@gmail.com</a>
              </li>
              <li className="text-[#B8B8B8] font-normal pt-2">Mumbai, India</li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-[#3A3A3A] flex flex-col md:flex-row justify-between items-center text-xs text-[#B8B8B8] font-medium tracking-wide">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shutter School India. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#F7F7F7] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F7F7F7] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
