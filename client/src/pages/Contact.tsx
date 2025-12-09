import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-neutral-200 selection:text-black">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Start the<br />conversation.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Whether you are looking to acquire a trophy asset or optimize an existing portfolio, our team is ready to provide bespoke guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            
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
                      className="peer w-full bg-transparent border-b border-border py-4 text-xl focus:outline-none focus:border-foreground transition-colors placeholder:text-transparent"
                    />
                    <label htmlFor="name" className="absolute left-0 top-4 text-xl text-muted-foreground transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text">
                      Name
                    </label>
                  </div>
                  
                  <div className="group relative">
                    <input 
                      type="email" 
                      id="email"
                      placeholder="Email" 
                      className="peer w-full bg-transparent border-b border-border py-4 text-xl focus:outline-none focus:border-foreground transition-colors placeholder:text-transparent"
                    />
                    <label htmlFor="email" className="absolute left-0 top-4 text-xl text-muted-foreground transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text">
                      Email Address
                    </label>
                  </div>

                  <div className="group relative">
                    <select 
                      id="interest"
                      className="peer w-full bg-transparent border-b border-border py-4 text-xl focus:outline-none focus:border-foreground transition-colors appearance-none rounded-none"
                    >
                      <option value="" disabled selected>Select Interest</option>
                      <option value="advisory">Investment Advisory</option>
                      <option value="management">Asset Management</option>
                      <option value="development">Development</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <label htmlFor="interest" className="absolute left-0 -top-6 text-xs uppercase tracking-widest text-muted-foreground">
                      Area of Interest
                    </label>
                  </div>

                  <div className="group relative">
                    <textarea 
                      id="message"
                      placeholder="Message" 
                      rows={4}
                      className="peer w-full bg-transparent border-b border-border py-4 text-xl focus:outline-none focus:border-foreground transition-colors placeholder:text-transparent resize-none"
                    ></textarea>
                     <label htmlFor="message" className="absolute left-0 top-4 text-xl text-muted-foreground transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-widest cursor-text">
                      Message
                    </label>
                  </div>
                </div>

                <button type="submit" className="group flex items-center gap-4 text-xl font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
                  Send Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
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
                <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-muted-foreground">Headquarters</h3>
                <p className="text-2xl font-medium mb-2">Stockholm</p>
                <p className="text-lg text-muted-foreground">Normalm 42<br/>111 47 Stockholm<br/>Sweden</p>
                <a href="mailto:sth@accordance.com" className="inline-block mt-4 text-lg underline decoration-1 underline-offset-4 hover:no-underline">sth@accordance.com</a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-muted-foreground">London</h3>
                  <p className="text-lg text-muted-foreground">Mayfair Place 12<br/>W1J 8AJ London<br/>United Kingdom</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-muted-foreground">New York</h3>
                  <p className="text-lg text-muted-foreground">432 Park Avenue<br/>New York, NY 10022<br/>United States</p>
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
