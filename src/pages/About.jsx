import { motion } from 'framer-motion';
import FounderCard from '../components/FounderCard';

const About = () => {
  const founders = [
    {
      name: 'Rohan Berde',
      role: 'Co-Founder & Creative Lead',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
      bio: [
        "Shutter School’s curriculum is anchored in Rohan’s active, fast-paced career as a professional photographer and cinematographer. Rohan brings years of high-stakes, on-the-ground industry experience directly into the classroom.",
        "His portfolio spans a demanding spectrum of visual media—from capturing the electric energy of massive 3,000+ attendee arena concerts and scaling complex event logistics, to executing precision-driven commercial setups.",
        "Rohan knows what it takes to deliver under pressure, covering the entire creative lifecycle from the first click of a mirrorless shutter to the final, crucial hours of color grading and timeline management in the edit suite."
      ]
    },
    {
      name: 'Abhay Tiwari',
      role: 'Co-Founder & Head of Business',
      image: '/images/abhay-tiwari.jpg',
      bio: [
        "A stunning visual portfolio is only half the equation; knowing how to monetize it is the other. As a Client Management and Business Expert, Abhay provides the strategic edge that most traditional film schools ignore.",
        "He equips students with the vital skills needed to transition from amateur creators to profitable business owners. From pitching and contract negotiation to client retention and managing the logistics of high-end shoots, Abhay ensures that Shutter School graduates are ready to navigate the corporate and freelance markets with total confidence."
      ]
    }
  ];

  return (
    <div className="bg-[#F5F2EC] min-h-screen">
      {/* Dark Header Banner */}
      <div className="bg-[#080808] pt-[200px] pb-32 px-4">
        <div className="max-w-[800px] mx-auto text-left">
           <h1 className="text-3xl font-heading font-bold uppercase tracking-widest text-[#F7F7F7] mb-2">About Us</h1>
           <p className="text-[14px] text-[#B8B8B8] uppercase tracking-widest font-semibold mb-10">
             Master the Craft. Build the Business.
           </p>
           
           <div className="text-[#B8B8B8] text-[14px] leading-relaxed space-y-6">
             <p>
                At Shutter School, we believe that mastering the visual arts goes far beyond reading a manual—and surviving in the industry takes more than just a good portfolio. Founded by a creative professional and a business strategist, Shutter School was built to bridge the gap between classroom theory, real-world execution, and sustainable business growth.
             </p>
             <p>
                We don't just teach you how to operate a camera; we teach you how to thrive as a working professional.
             </p>
           </div>
        </div>
      </div>

      {/* Meet the Founders */}
      <section className="py-20 bg-[#080808] border-t border-[rgba(184,184,184,0.16)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-heading font-bold text-[#F7F7F7] uppercase tracking-widest mb-10">Meet the Founders</h2>
          
          <div className="flex flex-col gap-10">
            {founders.map((founder, index) => (
              <FounderCard key={founder.name} founder={founder} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-24 bg-[#F5F2EC]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-heading font-bold text-[#111111] uppercase tracking-widest mb-6">The Shutter School Philosophy</h2>
          
          <p className="text-[18px] text-[#111111] font-medium mb-12 italic font-heading">
            "We built this academy for those who want to turn their creative passion into a highly profitable profession. Our curriculum is reverse-engineered from actual industry workflows and real-world client interactions."
          </p>
          
          <h3 className="text-sm font-bold text-[#111111] uppercase tracking-widest mb-8">What sets our training apart?</h3>
          
          <div className="space-y-8 mb-12 border-l border-[#D8D3C8] pl-6">
            <div>
              <h4 className="text-[13px] font-heading font-bold text-[#111111] uppercase tracking-widest mb-2">The Complete Workflow:</h4>
              <p className="text-[#555555] text-[14px] leading-relaxed">We cover the entire artistic lifecycle—from setting up complex lighting and composing the perfect frame, to mastering advanced post-production techniques.</p>
            </div>
            <div>
              <h4 className="text-[13px] font-heading font-bold text-[#111111] uppercase tracking-widest mb-2">Real-World Application:</h4>
              <p className="text-[#555555] text-[14px] leading-relaxed">Learn how to shoot in unpredictable environments, manage live event chaos, and execute flawless commercial setups with industry-standard gear.</p>
            </div>
            <div>
              <h4 className="text-[13px] font-heading font-bold text-[#111111] uppercase tracking-widest mb-2">The Business of Creation:</h4>
              <p className="text-[#555555] text-[14px] leading-relaxed">We pull back the curtain on the industry, teaching you how to price your work, land high-ticket clients, and build a sustainable brand.</p>
            </div>
          </div>
          
          <p className="text-[15px] text-[#555555] font-medium leading-relaxed">
            Whether you are holding a camera for the first time or looking to elevate your freelance career to the next level, Shutter School provides the blueprint, the tools, and the mentorship to help you master the art of the frame and the business behind it.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
