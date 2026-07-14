import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="bg-white pt-24 pb-20">
      {/* HERO */}
      <section className="py-16 lg:py-32 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight text-charcoal-900 mb-8">
              Decoding the future of <span className="italic font-serif">global capital.</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-800/70 font-light leading-relaxed">
              Decipher Investments was founded on a singular premise: the most transformative companies require more than just capital—they require strategic commercialization and access to global enterprise networks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE BELIEFS */}
      <section className="py-16 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="mb-12 lg:mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-charcoal-700 mb-4">Core Beliefs</h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-charcoal-900">Our Investment Philosophy</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="space-y-16">
              <div>
                <h4 className="text-2xl font-display font-medium text-charcoal-900 mb-4">Capital is a Commodity. Access is Not.</h4>
                <p className="text-charcoal-800/70 leading-relaxed text-lg">
                  In today's private markets, money is ubiquitous, but strategic execution is scarce. We prioritize opportunities where our enterprise network directly accelerates go-to-market strategies, derisking investments for our LPs.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-display font-medium text-charcoal-900 mb-4">Global by Design</h4>
                <p className="text-charcoal-800/70 leading-relaxed text-lg">
                  Innovation happens everywhere. We bridge ecosystems, connecting Silicon Valley's technological breakthroughs with the rapid adoption cycles and capital pools of emerging markets like India and the Middle East.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="bg-charcoal-900 p-12 lg:p-16 text-white flex flex-col justify-center">
              <h4 className="text-2xl font-display font-medium mb-8">The Decipher Mandate</h4>
              <ul className="space-y-6 text-lg font-light text-white/80">
                <li className="flex items-start">
                  <span className="text-decipher-yellow mr-4 mt-1">01</span>
                  Invest with deep thematic conviction.
                </li>
                <li className="flex items-start">
                  <span className="text-decipher-yellow mr-4 mt-1">02</span>
                  Lead with enterprise introductions.
                </li>
                <li className="flex items-start">
                  <span className="text-decipher-yellow mr-4 mt-1">03</span>
                  Provide structured liquidity solutions.
                </li>
                <li className="flex items-start">
                  <span className="text-decipher-yellow mr-4 mt-1">04</span>
                  Maintain absolute alignment of interest.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE / HISTORY */}
      <section className="py-16 lg:py-32 bg-off-white border-t border-light-grey">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="mb-12 lg:mb-16 max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest uppercase text-charcoal-700 mb-4">Evolution</h2>
            <h3 className="text-3xl md:text-4xl font-display font-medium text-charcoal-900 mb-6">Built on a foundation of execution.</h3>
            <p className="text-charcoal-800/70 text-lg">
              Our roots lie in cross-border advisory and institutional capital raising, evolving into a full-stack private markets platform.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              { year: "Phase I", title: "Strategic Advisory", desc: "Established deep enterprise relationships advising growth-stage companies on cross-border expansion." },
              { year: "Phase II", title: "Capital Solutions", desc: "Facilitated primary and secondary transactions for family offices seeking exclusive pre-IPO access." },
              { year: "Phase III", title: "Global Platform", desc: "Launched Decipher Investments to integrate sourcing, commercialization, and capital deployment under one institutional roof." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} initial="initial" whileInView="whileInView" className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 pb-12 border-b border-charcoal-900/10">
                <div className="md:w-48 flex-shrink-0">
                  <span className="text-decipher-yellow font-display font-bold text-xl">{item.year}</span>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-medium text-charcoal-900 mb-2">{item.title}</h4>
                  <p className="text-charcoal-800/70 text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-display text-charcoal-900 mb-8">Meet the Leadership</h2>
        <Link to="/team" className="inline-flex items-center text-sm font-bold tracking-wide uppercase text-charcoal-900 hover:text-decipher-yellow transition-colors">
          View Team <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </section>
    </div>
  );
}
