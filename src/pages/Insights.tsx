import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Insights() {
  return (
    <div className="bg-white pt-24 pb-20 min-h-screen">
      <section className="py-16 lg:py-32 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight text-charcoal-900 mb-8">
              Market <span className="italic font-serif">Intelligence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-800/70 font-light leading-relaxed">
              Perspectives on enterprise adoption, private market liquidity, and cross-border commercialization.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                tag: "Market Update",
                title: "The Enterprise AI Imperative: Moving beyond pilot purgatory.",
                desc: "Analyzing the shift in corporate buying patterns and how founders can accelerate commercialization in highly regulated environments."
              },
              {
                tag: "Private Markets",
                title: "Liquidity in a constrained environment.",
                desc: "How secondary markets are evolving to provide essential structural relief for early-stage investors and employees."
              },
              {
                tag: "Cross-Border",
                title: "Connecting Silicon Valley with emerging capital hubs.",
                desc: "The rising importance of family offices in the Middle East and Asia in funding deep tech innovation."
              },
              {
                tag: "Sectors",
                title: "Cybersecurity in the age of generative threat actors.",
                desc: "Why identity and data security are the next major frontiers for enterprise software investment."
              }
            ].map((article, i) => (
              <motion.div key={i} variants={fadeIn} initial="initial" whileInView="whileInView" className="group border-t border-charcoal-900/10 pt-8">
                <span className="text-xs font-bold tracking-widest uppercase text-charcoal-900/50 mb-4 block">{article.tag}</span>
                <h3 className="text-xl font-display font-medium text-charcoal-900 mb-4 group-hover:text-decipher-yellow transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-charcoal-800/70 text-sm leading-relaxed mb-6">
                  {article.desc}
                </p>
                <Link to="#" className="inline-flex items-center text-sm font-bold tracking-wide uppercase text-charcoal-900 group-hover:text-decipher-yellow transition-colors">
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
