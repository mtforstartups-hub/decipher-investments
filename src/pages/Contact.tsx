import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Contact() {
  return (
    <div className="bg-white pt-24 pb-20">
      <section className="py-16 lg:py-32 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight text-charcoal-900 mb-8">
                Connect with <br/><span className="text-decipher-yellow italic font-serif">Decipher.</span>
              </h1>
              <p className="text-xl text-charcoal-800/70 font-light leading-relaxed mb-12 max-w-lg">
                Whether you are an institutional investor seeking access, or a founder looking to accelerate commercialization, we are ready to partner.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-decipher-yellow mr-4 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase text-charcoal-900 mb-1">Email</h4>
                    <a href="mailto:abhishek@decipherinvestments.com" className="text-lg text-charcoal-800 hover:text-decipher-yellow transition-colors">abhishek@decipherinvestments.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-decipher-yellow mr-4 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase text-charcoal-900 mb-1">Phone</h4>
                    <p className="text-lg text-charcoal-800">+91 96647 56117</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-decipher-yellow mr-4 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase text-charcoal-900 mb-1">Location</h4>
                    <p className="text-lg text-charcoal-800">India • Global</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="bg-white p-10 lg:p-14 shadow-sm border border-light-grey rounded-2xl">
              <h3 className="text-2xl font-display font-medium text-charcoal-900 mb-8">Send an Enquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-charcoal-700 mb-2">First Name</label>
                    <input type="text" className="w-full bg-off-white border border-light-grey px-4 py-3 outline-none focus:border-charcoal-900 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-charcoal-700 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-off-white border border-light-grey px-4 py-3 outline-none focus:border-charcoal-900 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-charcoal-700 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-off-white border border-light-grey px-4 py-3 outline-none focus:border-charcoal-900 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-charcoal-700 mb-2">Enquiry Type</label>
                  <select className="w-full bg-off-white border border-light-grey px-4 py-3 outline-none focus:border-charcoal-900 transition-colors appearance-none">
                    <option>Investor Access</option>
                    <option>Founder / Startup</option>
                    <option>Strategic Partnership</option>
                    <option>Media</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-charcoal-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-off-white border border-light-grey px-4 py-3 outline-none focus:border-charcoal-900 transition-colors"></textarea>
                </div>
                <button className="w-full px-8 py-4 bg-charcoal-900 text-white font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-decipher-yellow hover:text-charcoal-900 transition-colors duration-300">
                  Submit Request <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
