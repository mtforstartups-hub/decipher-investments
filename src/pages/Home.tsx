import { motion } from 'motion/react';
import { ArrowRight, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function Home() {
  return (
    <div className="bg-white selection:bg-decipher-yellow selection:text-charcoal-900 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden bg-charcoal-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-40" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            <motion.div 
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.05] tracking-tighter font-display mb-8">
                Institutional <br />
                <span className="text-decipher-yellow">Capital.</span> <br />
                Global Access.
              </h1>
              <p className="text-lg md:text-2xl text-off-white/80 max-w-2xl font-light tracking-wide mb-12">
                Decipher Investments is a global private markets platform operating at the intersection of strategic capital and enterprise commercialization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/solutions" className="px-8 py-4 bg-decipher-yellow text-charcoal-900 rounded-full font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300">
                  Explore Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="px-8 py-4 border border-white/20 rounded-full font-medium tracking-wide flex items-center justify-center hover:bg-white hover:text-charcoal-900 transition-colors duration-300">
                  Partner With Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-4 pb-4 lg:pb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="border-l border-white/20 pl-6 lg:pl-8 space-y-8">
                <div>
                  <h3 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Cross-Border Conviction</h3>
                  <p className="text-lg text-white font-medium">Bridging the gap between frontier technology and enterprise adoption.</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Private Markets</h3>
                  <p className="text-lg text-white font-medium">Curating access to highly sought-after, off-market opportunities.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE GLOBAL SHIFT / WHY DECIPHER EXISTS */}
      <section className="py-16 lg:py-32 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
              <h2 className="text-sm font-bold tracking-widest uppercase text-charcoal-700 mb-6">The Global Shift</h2>
              <h3 className="text-3xl md:text-5xl font-display tracking-tight leading-tight text-charcoal-900 mb-8">
                Value creation has moved <span className="italic font-serif">decisively</span> to the private markets.
              </h3>
              <p className="text-lg md:text-xl text-charcoal-800/70 font-light leading-relaxed mb-6">
                As companies stay private longer, the most significant value inflection points occur before public listing. Simultaneously, breakthrough technologies require enterprise distribution to realize their potential.
              </p>
              <p className="text-lg md:text-xl text-charcoal-800/70 font-light leading-relaxed">
                Decipher exists to navigate this complex ecosystem, providing institutional investors and founders with a definitive advantage.
              </p>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="bg-white p-10 lg:p-12 shadow-sm border border-light-grey rounded-2xl">
              <h2 className="text-sm font-bold tracking-widest uppercase text-charcoal-700 mb-8">Why Decipher Exists</h2>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-decipher-yellow mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-xl font-display font-medium text-charcoal-900 mb-2">Information Asymmetry</h4>
                    <p className="text-charcoal-800/70">The best opportunities remain highly concentrated. We open access through deep, curated networks.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-decipher-yellow mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-xl font-display font-medium text-charcoal-900 mb-2">Execution Gap</h4>
                    <p className="text-charcoal-800/70">Capital alone is a commodity. Strategic commercialization and enterprise introductions are the true differentiators.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-decipher-yellow mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-xl font-display font-medium text-charcoal-900 mb-2">Global Fragmentation</h4>
                    <p className="text-charcoal-800/70">Innovation is borderless, but capital often remains local. We connect major ecosystems seamlessly.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ONE PLATFORM THREE CAPABILITIES */}
      <section className="py-16 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="mb-16 md:mb-24">
            <h2 className="text-sm font-bold tracking-widest uppercase text-charcoal-700 mb-6">One Platform</h2>
            <h3 className="text-3xl md:text-5xl font-display tracking-tight text-charcoal-900 max-w-3xl">
              Three institutional capabilities, operating synergistically.
            </h3>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="whileInView" className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                num: "01",
                title: "Private Market Access",
                desc: "Curated allocations in highly sought-after pre-IPO and growth-stage companies. We navigate complex cap tables to secure stakes for our LPs and family office network.",
                link: "/solutions"
              },
              {
                num: "02",
                title: "Enterprise Commercialization",
                desc: "We start from a named buyer problem. By leveraging our CXO network, we introduce breakthrough technologies to global enterprises, driving revenue and GTM.",
                link: "/solutions"
              },
              {
                num: "03",
                title: "Strategic Deal Sourcing",
                desc: "Acting as an extension of institutional capital, we identify and vet proprietary cross-border investments tailored to specific mandates and thematic conviction.",
                link: "/solutions"
              }
            ].map((cap, i) => (
              <motion.div key={i} variants={fadeIn} className="group relative flex flex-col h-full border-t border-charcoal-900/10 pt-8">
                <span className="text-decipher-yellow font-display font-medium text-lg mb-6">{cap.num}</span>
                <h4 className="text-2xl font-display font-medium text-charcoal-900 mb-4">{cap.title}</h4>
                <p className="text-charcoal-800/70 leading-relaxed mb-8 flex-grow">{cap.desc}</p>
                <Link to={cap.link} className="inline-flex items-center text-sm font-bold tracking-wide uppercase text-charcoal-900 group-hover:text-decipher-yellow transition-colors">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTOR CONVICTION */}
      <section className="py-16 lg:py-32 bg-charcoal-900 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest uppercase text-white/50 mb-6">Sector Conviction</h2>
              <h3 className="text-3xl md:text-5xl font-display tracking-tight">
                Investing in ecosystems shaping the future economy.
              </h3>
            </motion.div>
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="mt-8 md:mt-0">
              <Link to="/sectors" className="px-6 py-3 border border-white/20 rounded-full font-medium tracking-wide hover:bg-white hover:text-charcoal-900 transition-colors">
                View All Sectors
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              "Enterprise Software & AI",
              "Cybersecurity & Deep Tech",
              "Fintech & Embedded Finance",
              "Healthcare & MedTech",
              "Space & Frontier Tech",
              "Industrial Technology",
              "Climate Tech",
              "Consumer Discretionary"
            ].map((sector, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-charcoal-900 p-8 lg:p-10 hover:bg-charcoal-800 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-decipher-yellow/10 transition-colors">
                  <Globe className="w-5 h-5 text-decipher-yellow" />
                </div>
                <h4 className="text-xl font-display font-medium leading-snug">{sector}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED OPPORTUNITIES TEASER */}
      <section className="py-16 lg:py-32 bg-off-white border-t border-light-grey overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" className="max-w-3xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest uppercase text-charcoal-700 mb-6">Representative Access</h2>
            <h3 className="text-2xl md:text-4xl font-display tracking-tight text-charcoal-900 mb-12">
              Executed pipeline across global innovators.
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
              {["Anthropic", "SpaceX", "Databricks", "Stripe", "Epic Games"].map((name, idx) => (
                <span key={idx} className="text-2xl md:text-3xl font-bold font-display tracking-widest uppercase text-charcoal-900">{name}</span>
              ))}
            </div>
            <p className="mt-12 text-sm text-charcoal-800/50">Selected names illustrative of market access capability. Past performance does not guarantee future results.</p>
            
            <div className="mt-12">
              <Link to="/opportunities" className="inline-flex items-center text-sm font-bold tracking-wide uppercase text-charcoal-900 hover:text-decipher-yellow transition-colors">
                View Opportunities <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="py-16 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-charcoal-900/10 pb-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-charcoal-700 mb-4">Intelligence</h2>
              <h3 className="text-2xl md:text-4xl font-display font-medium text-charcoal-900">Market Insights</h3>
            </div>
            <Link to="/insights" className="mt-6 md:mt-0 text-sm font-bold tracking-wide uppercase flex items-center text-charcoal-900 hover:text-decipher-yellow transition-colors">
              Read All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
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
              }
            ].map((article, i) => (
              <motion.div key={i} variants={fadeIn} initial="initial" whileInView="whileInView" className="group">
                <span className="text-xs font-bold tracking-widest uppercase text-charcoal-900/50 mb-4 block">{article.tag}</span>
                <h3 className="text-xl font-display font-medium text-charcoal-900 mb-4 group-hover:text-decipher-yellow transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-charcoal-800/70 text-sm leading-relaxed">
                  {article.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FINAL CTA */}
      <section className="py-16 md:py-24 bg-charcoal-900 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div variants={fadeIn} initial="initial" whileInView="whileInView">
            <h2 className="text-3xl md:text-5xl font-display tracking-tight text-white mb-8">Ready to navigate the private markets?</h2>
            <Link to="/contact" className="inline-flex px-8 py-4 bg-decipher-yellow text-charcoal-900 rounded-full font-medium tracking-wide items-center justify-center gap-2 hover:bg-white transition-colors duration-300">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
