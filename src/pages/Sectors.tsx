import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Building2, Network, Globe } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const sectors = [
  { icon: ShieldCheck, title: "Cybersecurity", desc: "OT/ICS and critical-infrastructure security; identity, fraud and AI-security paradigms." },
  { icon: Cpu, title: "Deep Tech & AI", desc: "Enterprise SaaS, frontier models, AI/ML applications, IoT, Industry 4.0." },
  { icon: Building2, title: "Fintech & Embedded", desc: "Specialized lending, wealthtech, insurtech, payments infrastructure." },
  { icon: Network, title: "Healthcare & MedTech", desc: "Digital health, med-tech devices, diagnostics with regulatory moats." },
  { icon: Globe, title: "Climate Tech", desc: "Decarbonization technologies, grid intelligence, and sustainable infrastructure." },
];

export default function Sectors() {
  return (
    <div className="bg-white pt-24 pb-20 min-h-screen">
      <section className="py-16 lg:py-32 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight text-charcoal-900 mb-8">
              Thematic <span className="italic font-serif">Conviction.</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-800/70 font-light leading-relaxed">
              We deploy capital and commercialization expertise into sectors characterized by secular tailwinds, deep technological moats, and enterprise urgency.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, i) => (
              <motion.div key={i} variants={fadeIn} initial="initial" whileInView="whileInView" className="bg-off-white p-10 border border-light-grey hover:border-charcoal-900 transition-colors group">
                <sector.icon className="w-12 h-12 text-charcoal-900 mb-8 group-hover:text-decipher-yellow transition-colors" />
                <h4 className="text-2xl font-display font-medium text-charcoal-900 mb-4">{sector.title}</h4>
                <p className="text-charcoal-800/70 leading-relaxed">{sector.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
