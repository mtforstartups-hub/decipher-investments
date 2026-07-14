import { motion } from 'motion/react';
import { ArrowRight, Zap, Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Founders() {
  return (
    <div className="bg-white pt-24 pb-20">
      <section className="py-16 lg:py-32 bg-charcoal-900 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight mb-8">
              Capital is easy. <br/><span className="text-decipher-yellow">Customers are hard.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
              We partner with visionary founders to accelerate enterprise commercialization and scale across global markets.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-charcoal-900 mb-6">How We Accelerate Growth</h2>
            <p className="text-xl text-charcoal-800/70 font-light">We bring more than term sheets. We bring revenue opportunities.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Zap,
                title: "Enterprise Commercialization",
                desc: "We leverage our deep CXO network to fast-track POCs and enterprise contracts. Skip the cold outreach and connect directly with decision-makers actively seeking your solution."
              },
              {
                icon: Globe,
                title: "Cross-Border Expansion",
                desc: "Scaling internationally requires local context. We provide strategic guidance on market entry, regulatory compliance, and local partnerships in India, the Middle East, and Asia."
              },
              {
                icon: Target,
                title: "Capital Readiness",
                desc: "We help structure subsequent funding rounds, optimize cap tables, and connect you with the right institutional capital when you are ready to scale."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} initial="initial" whileInView="whileInView" className="p-8 lg:p-12 bg-off-white hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 border border-light-grey group-hover:border-decipher-yellow transition-colors">
                  <item.icon className="w-6 h-6 text-charcoal-900" />
                </div>
                <h4 className="text-2xl font-display font-medium text-charcoal-900 mb-4">{item.title}</h4>
                <p className="text-charcoal-800/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-charcoal-900 text-center text-white">
        <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display mb-8">Ready to scale your enterprise?</h2>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-decipher-yellow text-charcoal-900 rounded-full font-medium tracking-wide hover:bg-white transition-colors duration-300">
            Submit Opportunity <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
