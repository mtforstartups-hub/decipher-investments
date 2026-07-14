import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Investors() {
  return (
    <div className="bg-white pt-24 pb-20">
      <section className="py-16 lg:py-32 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight text-charcoal-900 mb-8">
              Alpha through <span className="italic font-serif">access.</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-800/70 font-light leading-relaxed">
              We serve as a strategic extension for Family Offices, HNWIs, and Institutional Investors, unlocking off-market liquidity and executing high-conviction mandates.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <h2 className="text-3xl md:text-4xl font-display font-medium text-charcoal-900 mb-8">Who We Work With</h2>
              <ul className="space-y-6">
                {[
                  "Family Offices seeking direct allocations",
                  "Institutional Investors requiring cross-border sourcing",
                  "Corporate Venture Capital (CVC) driving strategic M&A",
                  "High-Net-Worth Individuals (HNWIs) building private portfolios",
                  "VC and PE firms navigating secondary liquidity"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-6 h-6 text-decipher-yellow mr-4 shrink-0" />
                    <span className="text-lg text-charcoal-800/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="bg-charcoal-900 text-white p-10 lg:p-12">
              <h3 className="text-2xl font-display font-medium mb-6">Investment Themes</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                We focus on secular growth trends unconstrained by short-term market volatility.
              </p>
              <div className="space-y-4">
                {["Enterprise AI Integration", "Industrial Automation", "Cybersecurity Resilience", "Next-Gen Fintech Infrastructure"].map((theme, i) => (
                  <div key={i} className="border-b border-white/10 pb-4">
                    <span className="text-lg font-display text-white/90">{theme}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-32 bg-off-white border-t border-light-grey">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-charcoal-900">The Access Process</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Sourcing", desc: "Leveraging proprietary networks to identify pre-IPO and growth equity opportunities before they reach the broader market." },
              { title: "Structuring", desc: "Navigating ROFRs, cap table complexities, and legal frameworks to secure clean, compliant secondary or primary stakes." },
              { title: "Execution", desc: "Managing the end-to-end transaction mechanics, ensuring discreet and efficient transfer of shares or capital deployment." }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeIn} initial="initial" whileInView="whileInView" className="bg-white p-8 border border-charcoal-900/10">
                <span className="text-decipher-yellow font-display font-medium text-lg mb-4 block">0{i + 1}</span>
                <h4 className="text-xl font-display font-medium text-charcoal-900 mb-4">{step.title}</h4>
                <p className="text-charcoal-800/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 text-center">
        <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-decipher-yellow text-charcoal-900 rounded-full font-medium tracking-wide hover:bg-charcoal-900 hover:text-white transition-colors duration-300">
          Request Investor Access <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </section>
    </div>
  );
}
