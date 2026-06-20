import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header Banner */}
      <div className="bg-[#0A0A0A] h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center px-6 md:px-12 pt-16 border-b border-gray-900">
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-[#F7F7F7] mb-6">Privacy Policy</h1>
          <p className="text-sm text-[#B8B8B8] max-w-2xl mx-auto uppercase tracking-widest font-medium">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-gray-300 leading-relaxed space-y-8">
        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">1. Information We Collect</h2>
          <p className="mb-4">
            At Shutter School India, we collect information that you provide directly to us, such as when you fill out a contact form, enroll in a course, or communicate with us. The types of personal information we may collect include your name, email address, phone number, and any other information you choose to provide.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to provide, maintain, and improve our services. This includes responding to your inquiries, processing enrollments, sending administrative information, and communicating about courses, promotions, and upcoming events.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">3. Information Sharing</h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">4. Data Security</h2>
          <p className="mb-4">
            We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">5. Contact Us</h2>
          <p className="mb-4">
            If there are any questions regarding this privacy policy, you may contact us at shutterschoolindia@gmail.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
