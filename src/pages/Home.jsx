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
      <header className="relative min-h-[100svh] overflow-hidden bg-[#050505]">
          {/* Background Video */}
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1.25, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full z-0 origin-top-left"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              disablePictureInPicture
              className="w-full h-full object-cover md:object-center object-[center_38%] scale-[1.06] md:scale-100"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
          </motion.div>
          
          {/* Gradients & Overlays (Desktop) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent z-10 hidden md:block pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-[25vh] bg-gradient-to-t from-black to-transparent z-10 hidden md:block pointer-events-none opacity-90"></div>
          
          {/* Gradients & Overlays (Mobile) */}
          <div className="absolute inset-0 bg-black/30 z-10 md:hidden pointer-events-none"></div>
          <div className="absolute inset-x-0 top-0 h-[25vh] bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-transparent z-10 md:hidden pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-[80vh] bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10 md:hidden pointer-events-none"></div>
          
          {/* Grain overlay for cinematic feel */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] z-10 mix-blend-overlay pointer-events-none"></div>
          
          {/* Content Container */}
          <div className="relative z-20 w-full min-h-[100svh] flex flex-col justify-start pt-[24vh] md:pt-[25vh] px-[24px] md:px-[clamp(32px,8vw,120px)]">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="max-w-[850px] flex flex-col gap-4 md:gap-8"
              >
                  {/* Eyebrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-white to-gray-500 md:from-[#B8B8B8] md:to-[#B8B8B8]"></div>
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-300 md:text-[#B8B8B8] drop-shadow-md">
                      Premium Photography Academy
                    </span>
                  </motion.div>

                  {/* Desktop Headline */}
                  <h1 className="hidden md:block font-heading font-black text-white uppercase text-[clamp(2rem,8vw,4rem)] leading-[0.95] tracking-[-2px] drop-shadow-2xl">
                    LOVE PHOTOGRAPHY?<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                      LET'S MAKE IT YOUR CAREER.
                    </span>
                  </h1>

                  {/* Mobile Headline */}
                  <h1 className="md:hidden font-heading font-bold text-white text-[2.4rem] leading-[1.1] tracking-tight drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]">
                    Love Photography?<br/>
                    Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Creative Career.</span>
                  </h1>
                  
                  {/* Desktop Subtitle */}
                  <p className="hidden md:block font-manrope text-gray-300 max-w-[600px] text-[clamp(1rem,1.2vw,1.3rem)] leading-[1.6] tracking-wide opacity-90">
                    A modern curriculum designed to bridge the gap between classroom theory, real-world execution, and sustainable business growth.
                  </p>

                  {/* Mobile Subtitle */}
                  <p className="md:hidden font-manrope text-gray-200 text-[15px] leading-[1.65] tracking-wide opacity-90 max-w-[95%] drop-shadow-md mt-1">
                    Learn camera fundamentals, lighting, composition, editing, and real-world photography skills through a modern practical curriculum.
                  </p>
                  
                  {/* Buttons */}
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6 pt-5 md:pt-4 w-full md:w-auto items-stretch md:items-center">
                      {/* Mobile Primary Button */}
                      <Link 
                        to="/courses" 
                        className="md:hidden group relative overflow-hidden font-manrope bg-white text-black px-8 py-[16px] font-bold text-[13px] tracking-[2px] uppercase transition-all duration-300 text-center flex items-center justify-center rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02]"
                      >
                        <span className="relative z-10 flex items-center gap-2">Explore Courses <span className="text-lg leading-none">&rarr;</span></span>
                      </Link>

                      {/* Desktop Primary Button */}
                      <Link 
                        to="/courses" 
                        className="hidden md:flex group relative overflow-hidden font-manrope bg-white text-black px-8 py-[18px] font-bold text-[13px] md:text-sm tracking-[2px] uppercase transition-all duration-300 text-center items-center justify-center rounded-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
                      >
                        <span className="relative z-10">Explore Courses</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                      </Link>
                      
                      {/* Mobile Secondary Button */}
                      <Link 
                        to="/contact" 
                        className="md:hidden group font-manrope bg-black/20 backdrop-blur-md border border-white/20 text-white px-8 py-[16px] font-bold text-[13px] tracking-[2px] uppercase transition-all duration-300 text-center flex items-center justify-center rounded-sm hover:bg-white/10"
                      >
                        Contact Us
                      </Link>

                      {/* Desktop Secondary Button */}
                      <Link 
                        to="/contact" 
                        className="hidden md:flex group font-manrope bg-transparent border border-white/20 backdrop-blur-sm text-white px-8 py-[18px] font-bold text-[13px] md:text-sm tracking-[2px] uppercase hover:bg-white hover:text-black transition-all duration-500 text-center items-center justify-center rounded-sm"
                      >
                        Contact Us
                      </Link>
                  </div>


              </motion.div>
          </div>

          {/* Mobile Radial Glow */}
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0)_60%)] md:hidden pointer-events-none z-10 mix-blend-screen"></div>
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
                <Link 
                  key={idx} 
                  to={`/courses/${course.id}`}
                  className="relative aspect-square bg-black group overflow-hidden cursor-pointer rounded-sm border border-gray-900 hover:border-gray-600 transition-colors" 
                  style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 100%), url('${course.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                >
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
                <img key={idx} src={src} loading="lazy" decoding="async" className="h-48 w-full object-cover rounded-sm filter brightness-75 hover:brightness-100 transition" alt="Student Work" />
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
                      <img src="/images/rohan-berde.png" loading="lazy" decoding="async" className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700" alt="Rohan Berde" />
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
                      <img src="/images/abhayyyyy.jpeg" loading="lazy" decoding="async" className="w-full h-full object-contain object-center scale-[1.35] translate-y-[8%] filter grayscale group-hover:grayscale-0 transition-all duration-700" alt="Abhay Tiwari" />
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
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554046920-90dcac024a1e?auto=format&fit=crop&q=80&w=1500')" }}
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
