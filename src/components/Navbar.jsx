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

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileCoursesOpen(false);
    setIsCoursesHovered(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses', isDropdown: true },
    { name: 'Our \u00A0 Masters', path: '/student-gallery' },
    { name: 'Hall of Fame', path: '/hall-of-fame' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 flex justify-between items-center px-6 md:px-12 py-5 bg-transparent ${isVisible || isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
        <Link to="/" className="flex items-center group ml-2 md:ml-6">
          <div className="origin-left transition-transform duration-300 group-hover:scale-[1.02] mt-1 md:mt-0">
            <img src="/logo-transparent.png" alt="Shutter School" className="h-[72px] md:h-[100px] lg:h-[115px] w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" />
          </div>
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
                onClick={() => link.isDropdown && setIsCoursesHovered(false)}
                className={`transition-all duration-300 border-b-2 py-1 ${location.pathname === link.path
                  ? 'text-white border-white'
                  : 'text-white border-transparent hover:border-gray-300'
                  }`}
              >
                {link.name}
              </Link>
              {link.isDropdown && (
                <CourseDropdown
                  isOpen={isCoursesHovered}
                  isMobile={false}
                  closeDropdown={() => setIsCoursesHovered(false)}
                />
              )}
            </div>
          ))}
        </div>

        <Link to="/contact" className="hidden md:flex items-center justify-center font-manrope bg-white text-black px-8 py-[14px] font-bold text-[11px] tracking-[1.5px] uppercase hover:bg-gray-100 transition-all duration-300 rounded-sm hover:scale-[1.02]">
          Enroll Now
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative z-[60]">
          <button
            className="p-2 transition-transform duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-8 w-8 text-white hover:scale-110 transition-transform" strokeWidth={1.5} /> : <Menu className="h-7 w-7 text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-gradient-to-b from-[#050505] to-[#111111] md:hidden overflow-y-auto flex flex-col"
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

            <div className="flex-1 px-8 pt-[120px] pb-10 flex flex-col relative z-10">
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
                }}
                initial="hidden"
                animate="show"
                className="flex flex-col w-full"
              >
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div key={link.name} variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}>
                      {link.isDropdown ? (
                        <div className="border-b border-white/5">
                          <button
                            onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                            className="w-full flex justify-between items-center text-[13px] font-bold text-gray-300 uppercase tracking-[0.2em] py-6 group"
                          >
                            <span className="group-hover:text-white transition-colors group-hover:translate-x-2 duration-300">{link.name}</span>
                            <span className={`transform transition-transform duration-300 ${isMobileCoursesOpen ? 'rotate-180 text-white' : 'text-gray-600'}`}>
                              ▼
                            </span>
                          </button>
                          <CourseDropdown
                            isOpen={isMobileCoursesOpen}
                            isMobile={true}
                            closeDropdown={() => setIsMobileMenuOpen(false)}
                          />
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`group block w-full py-6 border-b transition-all duration-300
                            ${isActive ? 'bg-white/5 pl-4 border-l-2 border-l-white border-b-white/5' : 'border-b-white/5 hover:bg-white/5 hover:pl-4'}
                          `}
                        >
                          <span className={`text-[13px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                            {link.name}
                          </span>
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-auto pt-10"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative overflow-hidden flex items-center justify-center w-full bg-white text-black px-6 py-[18px] font-bold text-[13px] tracking-[2px] uppercase rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-transform hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center gap-2">Enroll Now <span className="text-lg leading-none transition-transform group-hover:translate-x-1">&rarr;</span></span>
                </Link>

                <div className="mt-8 text-center">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold">Shutterschool Photography Academy</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
