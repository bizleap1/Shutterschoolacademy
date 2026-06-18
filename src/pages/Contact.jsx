import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
  };

  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <header className="relative h-[250px] sm:h-[300px] md:h-[400px] bg-[#0A0A0A] border-b border-gray-900 flex flex-col justify-center px-6 md:px-12">
        <div className="max-w-3xl mt-16 text-center mx-auto">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white mb-4">GET IN TOUCH</h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">Whether you have a question about our courses, need to inquire about our programs, or just want to say hello, we're here to help.</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 md:py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#111] p-3 rounded-sm border border-gray-900 mt-1">
                  <Phone className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-widest">Phone</h4>
                  <p className="text-sm text-gray-300 font-medium tracking-wide">9619994477 / 4466 / 8833</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#111] p-3 rounded-sm border border-gray-900 mt-1">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-widest">Email</h4>
                  <a href="mailto:shutterschoolindia@gmail.com" className="text-sm text-gray-300 font-medium tracking-wide hover:text-white transition">
                    shutterschoolindia@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#111] p-3 rounded-sm border border-gray-900 mt-1">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-widest">Studio Location</h4>
                  <p className="text-sm text-gray-300 font-medium tracking-wide leading-relaxed max-w-xs">
                    Shakti Nagar , Dahisar east , Mumbai
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-900">
              <h4 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#111] p-3 rounded-sm border border-gray-900 text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a href="#" className="bg-[#111] p-3 rounded-sm border border-gray-900 text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                </a>
                <a href="#" className="bg-[#111] p-3 rounded-sm border border-gray-900 text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0A0A0A] p-8 md:p-10 rounded-sm border border-gray-900"
          >
            <h2 className="text-xl font-bold uppercase tracking-wider mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#111] border border-gray-800 px-4 h-12 text-sm text-white focus:outline-none focus:border-gray-500 transition-colors rounded-sm placeholder:text-gray-600"
                    placeholder="First Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#111] border border-gray-800 px-4 h-12 text-sm text-white focus:outline-none focus:border-gray-500 transition-colors rounded-sm placeholder:text-gray-600"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[#111] border border-gray-800 px-4 h-12 text-sm text-white focus:outline-none focus:border-gray-500 transition-colors rounded-sm placeholder:text-gray-600"
                    placeholder="youremail@gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-[#111] border border-gray-800 px-4 h-12 text-sm text-white focus:outline-none focus:border-gray-500 transition-colors rounded-sm placeholder:text-gray-600"
                    placeholder="+91 xxxxx xxxxx"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Interested In</label>
                <select className="w-full bg-[#111] border border-gray-800 px-4 h-12 text-sm text-gray-300 focus:outline-none focus:border-gray-500 transition-colors rounded-sm appearance-none cursor-pointer">
                  <option value="">Select a course or service</option>
                  <option value="Foundation Course">Foundation Course (The Starter)</option>
                  <option value="Content Creation Course">Content Creation Course (The Creator)</option>
                  <option value="Prime Course">Prime Course (The Bridge)</option>
                  <option value="Expert Course">Expert Course (The Professional)</option>

                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Your Message</label>
                <textarea
                  required
                  rows="5"
                  className="w-full bg-[#111] border border-gray-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-gray-500 transition-colors resize-none rounded-sm placeholder:text-gray-600"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>

              <button type="submit" className="w-full group relative overflow-hidden bg-white text-black px-6 py-4 font-bold text-xs uppercase tracking-widest rounded-md hover:scale-[1.02] transition-all duration-500 mt-4 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]">
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
