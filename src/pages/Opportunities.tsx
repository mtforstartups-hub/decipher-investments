import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Opportunities() {
  return (
    <div className="bg-white pt-24 pb-20 min-h-screen">
      <section className="py-16 lg:py-32 bg-charcoal-900 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight mb-8">
              Curated <span className="text-decipher-yellow italic font-serif">Opportunities.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
              Proprietary access to high-conviction primary and secondary allocations across global markets.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-32 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-medium text-charcoal-900 mb-6">Access Restricted</h2>
            <p className="text-charcoal-800/70 mb-12 text-lg">
              Detailed opportunity pipelines and data rooms are available exclusively to approved institutional investors and family office partners.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-decipher-yellow text-charcoal-900 rounded-full font-medium tracking-wide hover:bg-charcoal-900 hover:text-white transition-colors duration-300">
              Request Access <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
