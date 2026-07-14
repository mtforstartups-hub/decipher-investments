import { motion } from 'motion/react';
import { ArrowRight, Briefcase, Globe, Target, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const solutions = [
  {
    title: "Private Market Access",
    icon: LineChart,
    desc: "We provide institutional investors and family offices with curated allocations in highly sought-after pre-IPO and growth-stage companies. Through our deep networks, we navigate complex cap tables to secure both primary and secondary stakes, offering liquidity solutions to early investors and employees while securing attractive entry points for our clients."
  },
  {
    title: "Enterprise Commercialization",
    icon: Target,
    desc: "We invert the traditional venture model by starting with a named enterprise buyer problem. Leveraging our extensive CXO network across India, the Middle East, and beyond, we introduce breakthrough technologies to global enterprises. This approach drives immediate revenue for portfolio companies and validates product-market fit at scale."
  },
  {
    title: "Strategic Deal Sourcing",
    icon: Globe,
    desc: "Operating as an extension of institutional capital, we identify, vet, and structure proprietary cross-border investments. Our sourcing is mandate-driven, focusing on specific thematic convictions in sectors like Cybersecurity, AI, and Industrial Tech, ensuring absolute alignment with our partners' strategic objectives."
  },
  {
    title: "Cross-Border Advisory",
    icon: Briefcase,
    desc: "For founders looking to scale beyond their domestic markets, we provide comprehensive strategic advisory. From capital readiness to local partnership structuring and regulatory navigation, we guide companies through the complexities of global expansion, transforming local champions into global category leaders."
  }
];

export default function Solutions() {
  return (
    <div className="bg-white pt-24 pb-20">
      <section className="py-16 lg:py-32 bg-charcoal-900 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight mb-8">
              Capabilities designed for <br/><span className="text-decipher-yellow">complex markets.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
              We provide a unified platform for access, execution, and commercialization, serving the specialized needs of institutional capital and scaling founders.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {solutions.map((sol, i) => (
              <motion.div key={i} variants={fadeIn} initial="initial" whileInView="whileInView" className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
                <div className="md:col-span-4 lg:col-span-3">
                  <div className="w-16 h-16 bg-off-white rounded-full flex items-center justify-center mb-8 border border-light-grey">
                    <sol.icon className="w-6 h-6 text-charcoal-900" />
                  </div>
                  <h3 className="text-3xl font-display font-medium text-charcoal-900 mb-2">{sol.title}</h3>
                </div>
                <div className="md:col-span-8 lg:col-span-9 pt-4 md:border-l border-charcoal-900/10 md:pl-12 lg:pl-24">
                  <p className="text-xl text-charcoal-800/80 leading-relaxed font-light mb-12">
                    {sol.desc}
                  </p>
                  <Link to="/contact" className="inline-flex items-center text-sm font-bold tracking-wide uppercase text-charcoal-900 hover:text-decipher-yellow transition-colors">
                    Discuss Strategy <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
