import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function GlobalMarkets() {
  return (
    <div className="bg-white pt-24 pb-20 min-h-screen">
      <section className="py-16 lg:py-32 bg-charcoal-900 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight mb-8">
              Borderless <br/><span className="text-decipher-yellow">Innovation.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
              We bridge the world's most dynamic technology ecosystems, connecting capital, talent, and enterprise demand across continents.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-900/10">
            {[
              { region: "North America", desc: "Sourcing deep tech, AI, and enterprise software innovation from Silicon Valley and major hubs." },
              { region: "India & South Asia", desc: "Unlocking one of the fastest-growing enterprise markets and deploying strategic growth capital." },
              { region: "Middle East", desc: "Connecting sovereign wealth and family office capital with global technology leaders." },
              { region: "Southeast Asia", desc: "Facilitating cross-border commercialization in rapidly digitizing economies." }
            ].map((market, i) => (
              <motion.div key={i} variants={fadeIn} initial="initial" whileInView="whileInView" className="bg-white p-10 border border-transparent hover:border-charcoal-900 transition-colors">
                <MapPin className="w-8 h-8 text-decipher-yellow mb-6" />
                <h4 className="text-xl font-display font-medium text-charcoal-900 mb-4">{market.region}</h4>
                <p className="text-charcoal-800/70">{market.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
