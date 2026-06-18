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
      <header className="relative h-[85vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center px-12" style={{ backgroundImage: "url('/images/hero-main-hq.jpg')" }}>
          <div className="max-w-3xl space-y-6 mt-16">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">MASTER THE CRAFT.<br/>BUILD THE BUSINESS.</h1>
              <p className="text-gray-300 text-lg max-w-xl leading-relaxed">Learn photography, cinematography, lighting, editing, and the business skills needed to become a successful working creative.</p>
              <div className="flex space-x-6 pt-6">
                  <Link to="/contact" className="group relative overflow-hidden bg-white text-black px-8 py-4 font-bold text-xs uppercase tracking-widest rounded-md hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] inline-block text-center">
                    <span className="relative z-10">Enroll Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  </Link>
                  <Link to="/courses" className="group relative overflow-hidden border border-white/40 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest rounded-md hover:border-white hover:bg-white/5 transition-all duration-500 inline-block text-center hover:scale-105">
                    <span className="relative z-10">Explore Courses</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  </Link>
              </div>
          </div>
      </header>

      {/* Icon Strip Below Hero */}
      <div className="bg-[#0A0A0A] grid grid-cols-5 gap-4 py-8 text-center border-b border-gray-900">
          {[
            { icon: Camera, label: 'Photography' },
            { icon: Film, label: 'Cinematography' },
            { icon: Lightbulb, label: 'Lighting' },
            { icon: MonitorPlay, label: 'Editing' },
            { icon: TrendingUp, label: 'Business' }
          ].map((item, idx) => (
            <div key={idx} className="text-gray-400 hover:text-white cursor-pointer transition flex flex-col items-center">
              <item.icon className="w-6 h-6 block mb-2" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-widest font-semibold">{item.label}</span>
            </div>
          ))}
      </div>

      {/* Why Choose Us */}
      <section className="bg-[#F9F9F9] text-black py-24 px-6 md:px-12 text-center relative overflow-hidden">
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
                      <div className="w-16 h-16 rounded-full bg-[#F5F5F5] flex items-center justify-center mb-6 text-gray-700 group-hover:bg-black group-hover:text-white transition-colors duration-300">
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
      <section className="bg-black py-20 px-12">
          <div className="flex justify-between items-center mb-10 max-w-7xl mx-auto">
              <h2 className="text-xl font-bold uppercase tracking-wider">Featured Courses</h2>
              <Link to="/courses" className="text-sm font-semibold tracking-wider text-gray-400 hover:text-white uppercase transition">View All Courses &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {featuredCourses.map((course, idx) => (
                <Link to="/courses" key={idx} className="relative h-72 bg-cover bg-center group overflow-hidden cursor-pointer rounded-sm border border-gray-900 hover:border-gray-600 transition-colors" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url('${course.image}')` }}>
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
      <section className="bg-black pb-20 px-12">
          <div className="flex justify-between items-center mb-10 max-w-7xl mx-auto">
              <h2 className="text-xl font-bold uppercase tracking-wider">Student Work</h2>
              <Link to="/student-gallery" className="text-sm font-semibold tracking-wider text-gray-400 hover:text-white uppercase transition">View Gallery &rarr;</Link>
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
      <section className="bg-black py-24 px-6 md:px-12">
          <div className="text-center mb-20 max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-[0.1em]">MEET THE FOUNDERS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto items-start">
              
              {/* Founder 1 - Shifted Down */}
              <div className="group md:mt-16">
                  <div className="relative overflow-hidden border border-gray-900 aspect-[4/3] sm:aspect-square mb-6">
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" alt="Rohan Berde" />
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

              {/* Founder 2 - Standard Position */}
              <div className="group md:mb-16">
                  <div className="relative overflow-hidden border border-gray-900 aspect-[4/3] sm:aspect-square mb-6">
                      <img src="/images/abhay-tiwari.jpg" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" alt="Abhay Tiwari" />
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
      <footer className="relative bg-[#0A0A0A] text-white py-32 md:py-40 text-center px-6 md:px-12 overflow-hidden border-t border-gray-900">
          {/* Logo as background with CSS background removal */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
              {/* This combination ensures the background disappears whether it's black or white */}
              <img src="/logo.png" className="w-[120%] md:w-[60%] object-contain mix-blend-screen filter grayscale" alt="Shutter School Logo Background" />
              <img src="/logo.png" className="absolute w-[120%] md:w-[60%] object-contain mix-blend-multiply filter grayscale invert opacity-50" alt="" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black uppercase tracking-[0.1em] mb-12 leading-relaxed max-w-2xl">
              READY TO TURN YOUR PASSION INTO A PROFESSION?
            </h2>
            
            <Link to="/contact" className="group relative overflow-hidden inline-block bg-white text-black px-12 py-5 font-bold text-sm uppercase tracking-widest rounded-md hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
              <span className="relative z-10">Enroll Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </Link>

          </div>
      </footer>

    </div>
  );
};

export default Home;
