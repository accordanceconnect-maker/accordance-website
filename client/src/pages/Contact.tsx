import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A0A0A] font-sans selection:bg-[#E6E6E6] selection:text-[#0A0A0A]">
      <Navbar />
      
      <main className="pt-[120px] pb-[120px]">
        <div className="max-w-[1080px] mx-auto px-8 md:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-[120px]"
          >
            <h1 className="text-[#0A0A0A] mb-8">
              Start the conversation.
            </h1>
            <p className="text-[#2B2B2B] text-[18px] max-w-[600px]">
              Whether you are looking to acquire a trophy asset or optimize an existing portfolio, our team is ready to provide bespoke guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <form className="space-y-12">
                <div className="space-y-8">
                  <div className="group relative">
                    <input 
                      type="text" 
                      id="name"
                      placeholder="Name" 
                      className="peer w-full bg-transparent border-b border-[#E6E6E6] py-4 text-[18px] focus:outline-none focus:border-[#0A0A0A] transition-colors placeholder:text-transparent text-[#0A0A0A]"
                    />
                    <label htmlFor="name" className="absolute left-0 top-4 text-[18px] text-[#2B2B2B] transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text font-medium">
                      Name
                    </label>
                  </div>
                  
                  <div className="group relative">
                    <input 
                      type="email" 
                      id="email"
                      placeholder="Email" 
                      className="peer w-full bg-transparent border-b border-[#E6E6E6] py-4 text-[18px] focus:outline-none focus:border-[#0A0A0A] transition-colors placeholder:text-transparent text-[#0A0A0A]"
                    />
                    <label htmlFor="email" className="absolute left-0 top-4 text-[18px] text-[#2B2B2B] transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text font-medium">
                      Email Address
                    </label>
                  </div>

                  <div className="group relative">
                    <select 
                      id="interest"
                      className="peer w-full bg-transparent border-b border-[#E6E6E6] py-4 text-[18px] focus:outline-none focus:border-[#0A0A0A] transition-colors appearance-none rounded-none text-[#0A0A0A]"
                    >
                      <option value="" disabled selected>Select Interest</option>
                      <option value="advisory">Transaction Strategy</option>
                      <option value="legal">Statutory & Legal</option>
                      <option value="valuation">Valuation & Data</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <label htmlFor="interest" className="absolute left-0 -top-6 text-xs uppercase tracking-widest text-[#2B2B2B] font-medium">
                      Area of Interest
                    </label>
                  </div>

                  <div className="group relative">
                    <textarea 
                      id="message"
                      placeholder="Message" 
                      rows={4}
                      className="peer w-full bg-transparent border-b border-[#E6E6E6] py-4 text-[18px] focus:outline-none focus:border-[#0A0A0A] transition-colors placeholder:text-transparent resize-none text-[#0A0A0A]"
                    ></textarea>
                     <label htmlFor="message" className="absolute left-0 top-4 text-[18px] text-[#2B2B2B] transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text font-medium">
                      Message
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn-polestar w-full justify-center">
                  Send Inquiry &rarr;
                </button>
              </form>
            </motion.div>

            {/* Offices */}
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="space-y-16"
            >
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-[#2B2B2B]">Headquarters</h3>
                <p className="text-[24px] font-medium mb-2 text-[#0A0A0A]">New Delhi</p>
                <p className="text-[16px] text-[#2B2B2B]">Connaught Place<br/>New Delhi, 110001<br/>India</p>
                <a href="mailto:info@accordance.in" className="inline-block mt-4 text-[16px] underline decoration-1 underline-offset-4 hover:no-underline text-[#0A0A0A]">info@accordance.in</a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-[#2B2B2B]">Mumbai</h3>
                  <p className="text-[16px] text-[#2B2B2B]">BKC, Bandra East<br/>Mumbai, 400051<br/>India</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-[#2B2B2B]">Bangalore</h3>
                  <p className="text-[16px] text-[#2B2B2B]">Whitefield<br/>Bangalore, 560066<br/>India</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
