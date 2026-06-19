import { motion } from 'framer-motion';
import { Camera, Film, Lightbulb, MonitorPlay, TrendingUp, User, RefreshCw, CheckSquare } from 'lucide-react';
import { courses } from '../data/courses';
import { galleryImages } from '../data/gallery';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredCourses = courses.slice(0, 4);
  const featuredGallery = galleryImages.slice(0, 5);
  
  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Hero Section */}
      <header className="relative min-h-[100svh] overflow-hidden">
          {/* Background Video */}
          {/* We use scale-125 anchored to the top-left. 
              This explicitly forces the right and bottom edges (and thus the watermark) 
              25% outside the viewable area, completely immune to aspect ratio centering quirks. */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 scale-[1.25] origin-top-left"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          
          {/* Standard background gradient for desktop text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10 hidden sm:block"></div>
          
          {/* Mobile vertical gradient so text at bottom is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 sm:hidden pointer-events-none"></div>
          
          {/* Subtle bottom gradient to blend the bottom edge smoothly without looking like a patch */}
          <div className="absolute inset-x-0 bottom-0 h-[20vh] bg-gradient-to-t from-black to-transparent z-10 pointer-events-none opacity-80"></div>
          
          {/* Content Container */}
          <div className="relative z-20 w-full min-h-[100svh] flex flex-col justify-end pb-[20vh] sm:pb-0 sm:justify-start sm:pt-[25vh] md:pt-[32vh] px-5 sm:px-8 md:px-[clamp(28px,6vw,95px)]">
              <div className="max-w-[820px] flex flex-col gap-6 md:gap-8">
                  <h1 className="font-spartan font-[900] text-white uppercase text-[clamp(2.8rem,11vw,5.5rem)] leading-[1.1] md:leading-[0.9] tracking-[-1px] md:tracking-[-2px]">
                    MASTER THE CRAFT.<br/>BUILD THE BUSINESS.
                  </h1>
                  <p className="font-manrope text-gray-200 max-w-[650px] text-[15px] sm:text-[clamp(0.9rem,1.1vw,1.2rem)] leading-[1.6] md:leading-[1.5] tracking-wide opacity-90">
                    Master the art, science, and business of professional photography to build a successful career behind the lens.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-[24px] pt-4 md:pt-2 w-full sm:w-auto items-stretch sm:items-start">
                      <Link to="/contact" className="w-full sm:w-auto font-manrope bg-white text-black px-8 py-4 md:py-[18px] font-bold text-[13px] md:text-sm tracking-[2px] uppercase hover:bg-gray-100 transition-all duration-300 text-center flex items-center justify-center">Enroll Now</Link>
                      <Link to="/courses" className="w-full sm:w-auto font-manrope bg-transparent border border-white/20 backdrop-blur-md text-white px-8 py-4 md:py-[18px] font-bold text-[13px] md:text-sm tracking-[2px] uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-center flex items-center justify-center">Explore Courses</Link>
                  </div>
              </div>
          </div>
      </header>



      {/* Why Choose Us */}
      <section className="bg-[#F9F9F9] text-black py-16 md:py-24 px-6 md:px-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50"></div>
          
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-[0.1em] mb-16">WHY CHOOSE SHUTTER SCHOOL?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: User, title: 'Industry Experts', desc: 'Learn from active professionals with real-world experience.' },
                  { icon: RefreshCw, title: 'Practical Learning', desc: 'Hands-on training with real projects and industry workflows.' },
                  { icon: CheckSquare, title: 'Complete Workflow', desc: 'From shooting to editing, we teach the entire creative process.' },
                  { icon: Lightbulb, title: 'Career & Business', desc: 'We prepare you to build a sustainable and profitable career.' }
                ].map((feature, idx) => (
                  <div key={idx} className="group flex flex-col items-center p-8 bg-white rounded-sm border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                      <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mb-6 group-hover:bg-[#F5F5F5] group-hover:text-black transition-colors duration-300">
                        <feature.icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-bold text-sm tracking-wider uppercase mb-3 text-black">{feature.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
            </div>
          </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-black py-16 md:py-20 px-6 md:px-12">
          <div className="flex justify-between items-center mb-10 max-w-7xl mx-auto">
              <h2 className="text-xl font-bold uppercase tracking-wider">Featured Courses</h2>
              <Link to="/courses" className="text-sm font-semibold tracking-wider text-gray-400 hover:text-white uppercase transition whitespace-nowrap flex items-center gap-1 text-right">View All Courses <span>&rarr;</span></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {featuredCourses.map((course, idx) => (
                <Link to="/courses" key={idx} className="relative aspect-square bg-black group overflow-hidden cursor-pointer rounded-sm border border-gray-900 hover:border-gray-600 transition-colors" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 100%), url('${course.image}')`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] font-bold tracking-widest uppercase text-white bg-black/60 backdrop-blur-md px-2 py-1 rounded-sm border border-white/10">{course.duration}</span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">{course.subtitle}</p>
                      <h3 className="font-bold text-lg leading-tight text-white mb-3">{course.title}</h3>
                      <div className="h-[1px] w-8 bg-white/30 group-hover:w-full transition-all duration-500 mb-4"></div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">View Course <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span></span>
                    </div>
                </Link>
              ))}
          </div>
      </section>

      {/* Student Work Gallery */}
      <section className="bg-black pb-16 md:pb-20 px-6 md:px-12">
          <div className="flex justify-between items-center mb-10 max-w-7xl mx-auto">
              <h2 className="text-xl font-bold uppercase tracking-wider">Student Work</h2>
              <Link to="/student-gallery" className="text-sm font-semibold tracking-wider text-gray-400 hover:text-white uppercase transition whitespace-nowrap flex items-center gap-1 text-right">View Gallery <span>&rarr;</span></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-7xl mx-auto">
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
                'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400',
                'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400',
                'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=400',
                'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400'
              ].map((src, idx) => (
                <img key={idx} src={src} className="h-48 w-full object-cover rounded-sm filter brightness-75 hover:brightness-100 transition" alt="Student Work" />
              ))}
          </div>
      </section>

      {/* Meet The Founders */}
      <section className="bg-black py-16 md:py-24 px-6 md:px-12">
          <div className="text-center mb-20 max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-[0.1em]">MEET THE FOUNDERS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto items-start">
              
              {/* Founder 1 */}
              <div className="group">
                  <div className="relative overflow-hidden border border-gray-900 aspect-[4/5] mb-6 bg-black flex items-center justify-center">
                      <img src="/images/rohan-berde.png" className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700" alt="Rohan Berde" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Rohan Berde</h3>
                      <p className="text-xs font-semibold text-[#B8B8B8] uppercase tracking-widest mb-4">Co-Founder & Creative Lead</p>
                      <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-md">Professional photographer and cinematographer with experience in commercial, editorial, and ad work worldwide.</p>
                      <div className="flex space-x-6 text-gray-500">
                          <span className="text-xs uppercase tracking-widest font-semibold hover:text-white cursor-pointer transition-colors">Instagram</span>
                          <span className="text-xs uppercase tracking-widest font-semibold hover:text-white cursor-pointer transition-colors">Portfolio</span>
                      </div>
                  </div>
              </div>

              {/* Founder 2 */}
              <div className="group">
                  <div className="relative overflow-hidden border border-gray-900 aspect-[4/5] mb-6 bg-black flex items-center justify-center">
                      <img src="/images/abhay-tiwari-new.jpeg" className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700" alt="Abhay Tiwari" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Abhay Tiwari</h3>
                      <p className="text-xs font-semibold text-[#B8B8B8] uppercase tracking-widest mb-4">Co-Founder & Head of Business</p>
                      <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-md">Business strategist and client management expert helping creatives build profitable, sustainable ventures.</p>
                      <div className="flex space-x-6 text-gray-500">
                          <span className="text-xs uppercase tracking-widest font-semibold hover:text-white cursor-pointer transition-colors">LinkedIn</span>
                          <span className="text-xs uppercase tracking-widest font-semibold hover:text-white cursor-pointer transition-colors">Twitter</span>
                      </div>
                  </div>
              </div>

          </div>
      </section>

      {/* Footer CTA */}
      <section 
        className="relative text-white py-24 md:py-48 text-center px-6 md:px-12 overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-main-updated.png')" }}
      >
          {/* Top blend gradient to merge seamlessly with the upper black section */}
          <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-black to-transparent z-0"></div>

          {/* Subtle Overlay for readability */}
          <div className="absolute inset-0 bg-black/30 z-0"></div>

          {/* Subtle Spotlight Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-12">
            
            <h2 className="font-spartan font-[900] uppercase text-[clamp(1.8rem,8vw,2.5rem)] md:text-[clamp(2.5rem,4vw,4.5rem)] leading-[1.15] md:leading-[0.95] tracking-[-1px] md:tracking-[-2px] text-white px-4 md:px-0">
              READY TO TURN YOUR PASSION<br className="hidden md:block"/> INTO A PROFESSION?
            </h2>
            
            <Link to="/contact" className="font-manrope bg-white text-black px-12 py-[18px] font-bold text-[13px] tracking-[2px] uppercase hover:bg-gray-100 transition-all duration-300 rounded-sm hover:scale-[1.03] inline-block shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              Enroll Now
            </Link>

          </div>
      </section>

    </div>
  );
};

export default Home;
