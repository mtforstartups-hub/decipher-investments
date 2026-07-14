import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Team() {
  return (
    <div className="bg-white pt-24 pb-20 min-h-screen">
      <section className="py-16 lg:py-32 bg-charcoal-900 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight mb-8">
              Operating <br/><span className="text-decipher-yellow italic font-serif">Leadership.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
              Led by seasoned dealmakers and operators with a track record of cross-border execution and enterprise scaling.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-32 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="aspect-[3/4] bg-light-grey relative overflow-hidden group">
              <img 
                src="/Abhishek Jain.webp" 
                alt="Abhishek Jain" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-charcoal-800 opacity-10 group-hover:opacity-0 transition-opacity duration-500" />
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <h2 className="text-sm font-bold tracking-widest uppercase text-charcoal-700 mb-2">Founder & Managing Partner</h2>
              <h3 className="text-3xl md:text-4xl font-display font-medium text-charcoal-900 mb-6">Abhishek</h3>
              <p className="text-lg text-charcoal-800/70 leading-relaxed mb-8">
                With a background deeply rooted in cross-border advisory and institutional capital markets, Abhishek founded Decipher Investments to bridge the gap between global capital and frontier technology commercialization. 
              </p>
              <p className="text-lg text-charcoal-800/70 leading-relaxed mb-8">
                He has successfully facilitated complex secondary transactions, structured strategic capital for high-growth enterprises, and advised founders on scaling operations across India and international markets.
              </p>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold tracking-wide uppercase text-charcoal-900 hover:text-decipher-yellow transition-colors">
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn Profile
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
           <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-medium text-charcoal-900 mb-6">Our Ecosystem</h2>
            <p className="text-charcoal-800/70 leading-relaxed text-lg mb-12">
              Beyond our core leadership, Decipher is powered by a trusted ecosystem of venture partners, CXO advisors, and industry specialists who actively support our portfolio's commercialization objectives.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
