import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CourseDropdown from './CourseDropdown';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesHovered, setIsCoursesHovered] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Only hide if mobile menu is not open
      if (!isMobileMenuOpen) {
        if (window.scrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileCoursesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses', isDropdown: true },
    { name: 'Student Gallery', path: '/student-gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 flex justify-between items-center px-6 md:px-12 py-5 bg-transparent ${
        isVisible || isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
          <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Shutter School Logo" 
                className="h-[50px] md:h-[70px] w-auto object-contain" 
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12 text-[15px] text-white font-manrope font-semibold items-center mx-auto">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => link.isDropdown && setIsCoursesHovered(true)}
                  onMouseLeave={() => link.isDropdown && setIsCoursesHovered(false)}
                >
                  <Link
                    to={link.path}
                    className={`transition-all duration-300 border-b-2 py-1 ${
                      location.pathname === link.path 
                        ? 'text-white border-white' 
                        : 'text-white border-transparent hover:border-gray-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.isDropdown && (
                    <CourseDropdown isOpen={isCoursesHovered} isMobile={false} />
                  )}
                </div>
              ))}
          </div>
          
          <Link to="/contact" className="hidden md:flex items-center justify-center font-manrope bg-white text-black px-8 py-[14px] font-bold text-[11px] tracking-[1.5px] uppercase hover:bg-gray-100 transition-all duration-300 rounded-sm hover:scale-[1.02]">
            Enroll Now
          </Link>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              className="text-white p-2" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#000000] pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.isDropdown ? (
                    <div>
                      <button 
                        onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                        className="w-full flex justify-between items-center text-lg font-bold text-white uppercase tracking-widest py-4 border-b border-gray-900"
                      >
                        {link.name}
                        <span className={`transform transition-transform ${isMobileCoursesOpen ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      <CourseDropdown 
                        isOpen={isMobileCoursesOpen} 
                        isMobile={true} 
                        closeMobileMenu={() => setIsMobileMenuOpen(false)}
                      />
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-bold text-white uppercase tracking-widest py-4 border-b border-gray-900"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 block w-full text-center bg-white text-black px-6 py-4 font-bold text-xs tracking-widest uppercase rounded-sm"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
