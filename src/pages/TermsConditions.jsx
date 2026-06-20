import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header Banner */}
      <div className="bg-[#0A0A0A] h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center px-6 md:px-12 pt-16 border-b border-gray-900">
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-[#F7F7F7] mb-6">Terms & Conditions</h1>
          <p className="text-sm text-[#B8B8B8] max-w-2xl mx-auto uppercase tracking-widest font-medium">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-gray-300 leading-relaxed space-y-8">
        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">1. Terms</h2>
          <p className="mb-4">
            By accessing the website at Shutter School India, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">2. Enrollment and Payments</h2>
          <p className="mb-4">
            Course enrollments are subject to availability. Payment terms and refund policies will be provided at the time of enrollment. Shutter School reserves the right to modify course structures and pricing without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">3. Intellectual Property</h2>
          <p className="mb-4">
            All course materials, including but not limited to videos, presentations, and documents, are the intellectual property of Shutter School India. You may not reproduce, distribute, or create derivative works from these materials without express written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">4. Student Conduct</h2>
          <p className="mb-4">
            Students are expected to maintain a professional and respectful demeanor during all classes, workshops, and practical sessions. Shutter School reserves the right to dismiss any student whose behavior is disruptive or violates our code of conduct.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">5. Limitations</h2>
          <p className="mb-4">
            In no event shall Shutter School India or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Shutter School's website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
