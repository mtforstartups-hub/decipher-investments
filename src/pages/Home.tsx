import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { FAQ } from "../components/FAQ";
import { FAQStructuredData } from "../components/FAQStructuredData";
import { Section } from "../components/ui/Section";
import { InteractiveBox } from "../components/ui/InteractiveBox";
import { InteractiveBoxGroup } from "../components/ui/InteractiveBoxGroup";
import { Button } from "../components/ui/Button";
import {
  ArrowRight,
  ChevronRight,
  Activity,
  Globe,
  Handshake,
  Link as LinkIcon,
  Target,
  Search,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const homeFaqs = [
  {
    question: "What does Decipher Investments do?",
    answer:
      "Decipher works with startups, growth companies and investors across capital, private markets and strategic growth. We help companies access fundraising, markets and strategic relationships, while helping investors source and execute differentiated private-market opportunities.",
  },
  {
    question: "Who does Decipher work with?",
    answer:
      "Decipher works with startups, growth-stage companies, founders, family offices, venture capital firms, private equity investors, corporate venture funds, strategic investors and other participants in private markets.",
  },
  {
    question: "How does Decipher help startups and growth companies?",
    answer:
      "Decipher supports companies across strategic fundraising, international expansion, GTM strategy, strategic partnerships, corporate development, channel development, reseller networks, systems integration partnerships and enterprise market access.",
  },
  {
    question: "How does Decipher help investors?",
    answer:
      "Decipher helps investors access and evaluate opportunities across primary growth-stage investments, secondary transactions, pre-IPO opportunities, shareholder liquidity, co-investment and deal syndication. We can also support opportunity scouting, sourcing and transaction coordination.",
  },
  {
    question:
      "What types of private-market opportunities does Decipher work with?",
    answer:
      "Decipher works across growth-stage primary transactions, secondary opportunities, pre-IPO opportunities, shareholder liquidity transactions, co-investment and syndicated private-market opportunities.",
  },
  {
    question: "Does Decipher work internationally?",
    answer:
      "Yes. Decipher’s model is designed to support companies and investors across markets, including international expansion, cross-border relationships, investor access, enterprise partnerships and private-market opportunities.",
  },
  {
    question: "How can I work with Decipher?",
    answer:
      "Founders and companies can join through the founder pathway, while investors can join the investor network. Decipher then evaluates the relevant capital, growth or investment objectives before exploring potential opportunities.",
  },
];

const marqueeItems = [
  { type: "label", content: "Asia" },
  {
    type: "image",
    src: "/assets/brands/National_Stock_Exchange_of_India_(NSE)_logo.svg",
    alt: "NSE",
  },
  {
    type: "image",
    src: "/assets/brands/Swiggy_Logo.svg",
    alt: "Swiggy",
  },
  {
    type: "image",
    src: "/assets/brands/shiprocket.svg",
    alt: "Shiprocket",
  },
  {
    type: "image",
    src: "/assets/brands/pantherun.png",
    alt: "Pantherun",
  },
  {
    type: "image",
    src: "/assets/brands/Oncare.png",
    alt: "Oncare Asia",
  },
  {
    type: "image",
    src: "/assets/brands/agnikul.webp",
    alt: "Agnikul",
  },
  {
    type: "image",
    src: "/assets/brands/anthropic.svg",
    alt: "Anthropic",
  },
  {
    type: "image",
    src: "/assets/brands/spacex.svg",
    alt: "SpaceX",
  },
  {
    type: "image",
    src: "/assets/brands/zipline.svg",
    alt: "Zipline",
  },
  {
    type: "image",
    src: "/assets/brands/databricks.svg",
    alt: "Databricks",
  },
  {
    type: "text",
    content: "Revolut",
  },
  {
    type: "image",
    src: "/assets/brands/openai.svg",
    alt: "OpenAI",
  },
  {
    type: "image",
    src: "/assets/brands/Canva_Logo.svg",
    alt: "Canva",
  },
  {
    type: "image",
    src: "/assets/brands/ByteDance_logo_English.svg",
    alt: "ByteDance",
  },
  {
    type: "image",
    src: "/assets/brands/andruil.svg",
    alt: "Anduril",
  },
];

export function Home() {
  const words = ["Capital.", "Access.", "Growth."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-white">
        {/* Subtle geometric framing */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-5">
          <div className="w-full max-w-[1400px] h-[80vh] border-[0.5px] border-navy rounded-sm hidden md:block" />
          <div className="absolute left-[10%] top-0 bottom-0 w-[0.5px] bg-navy hidden lg:block" />
          <div className="absolute right-[10%] top-0 bottom-0 w-[0.5px] bg-navy hidden lg:block" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] tracking-tight font-display font-medium text-navy max-w-5xl mb-8 flex flex-col items-center gap-y-2 md:gap-y-4">
            <span>Deciphering</span>
            <span className="text-yellow relative inline-flex justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-16 leading-relaxed font-normal">
            Connecting startups and growth companies with capital, markets and
            strategic relationships, while helping investors access and execute
            differentiated private-market opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <Button
              variant="primary"
              size="lg"
              to="/contact?type=investor"
              className="w-full sm:w-auto"
            >
              Join as an Investor
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/contact?type=founder"
              className="w-full sm:w-auto"
            >
              Join as a Founder
            </Button>
          </div>
        </div>
      </section>

      {/* SELECTED OPPORTUNITIES MARQUEE */}
      <section className="py-10 bg-white border-y border-slate-200 overflow-hidden flex flex-col gap-6">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-end">
          <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400">
            Selected Opportunities
          </h3>
        </div>
        <div className="relative flex overflow-x-hidden group">
          {/* Subtle gradient fades on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Seamless rolling tracks */}
          {[0, 1, 2, 3].map((trackIndex) => (
            <div
              key={trackIndex}
              className="flex shrink-0 items-center gap-12 pr-12 animate-marquee whitespace-nowrap"
              aria-hidden={trackIndex > 0 ? "true" : undefined}
            >
              {marqueeItems.map((item, i) => {
                if (item.type === "label") {
                  return (
                    <span
                      key={i}
                      className="text-xs font-semibold text-slate-400 uppercase tracking-widest select-none"
                    >
                      {item.content}
                    </span>
                  );
                }
                if (item.type === "text") {
                  return (
                    <span
                      key={i}
                      className="text-xl font-display font-semibold text-slate-800 select-none"
                    >
                      {item.content}
                    </span>
                  );
                }
                return (
                  <img
                    key={i}
                    src={item.src}
                    alt={item.alt}
                    loading="eager"
                    draggable={false}
                    className="h-8 w-auto object-contain select-none pointer-events-none"
                  />
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: TWO WAYS WE CREATE VALUE */}
      <Section bg="offwhite">
        <div className="mb-16 md:mb-24">
          <span className="text-sm font-semibold tracking-widest uppercase text-muted block mb-4">
            TWO WAYS WE CREATE VALUE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-navy mb-6 max-w-3xl">
            Two Sides. One Ecosystem.
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Decipher works with startups, growth companies and investors across
            capital, private markets and strategic growth.
          </p>
        </div>

        <InteractiveBoxGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <InteractiveBox
            title="For Investors"
            subtitle="Discover. Access. Execute."
            content="Access differentiated private-market opportunities with strategic support across sourcing, transactions and execution. We provide unique insights into primary growth-stage opportunities, secondary transactions, and pre-IPO liquidity events."
            icon={<Target size={28} />}
          />

          <InteractiveBox
            title="For Startups"
            subtitle="Raise. Expand. Grow."
            content="Access capital, new markets, strategic relationships and commercial growth opportunities. Our institutional approach helps you scale internationally, form strategic partnerships, and navigate complex corporate development."
            icon={<Activity size={28} />}
          />
        </InteractiveBoxGroup>
      </Section>

      {/* SECTION 3: FOR INVESTORS */}
      <Section bg="white">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-navy mb-6">
              Access Better Opportunities.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              The most compelling private-market opportunities depend on access,
              relationships and timing.
            </p>
            <Link
              to="/investors"
              className="group inline-flex items-center text-navy font-semibold hover:text-yellow transition-colors"
            >
              Explore Investor Capabilities{" "}
              <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <InteractiveBoxGroup className="md:w-2/3 space-y-4">
            <InteractiveBox
              title="Source"
              content="We identify off-market, high-quality opportunities specifically aligned with your investment mandate and risk profile, ensuring you see the deals that matter."
              icon={<Search size={24} />}
            />
            <InteractiveBox
              title="Access"
              content="Unlock exclusive entry into primary rounds, secondary transactions, pre-IPO events, and co-investment structures that are typically closed to the broader market."
              icon={<ShieldCheck size={24} />}
            />
            <InteractiveBox
              title="Execute"
              content="Comprehensive support throughout the transaction lifecycle, including diligence coordination, deal syndication, and seamless execution structuring."
              icon={<BarChart3 size={24} />}
            />
          </InteractiveBoxGroup>
        </div>
      </Section>

      {/* SECTION 4: FOR STARTUPS */}
      <Section bg="offwhite">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-navy mb-6 max-w-3xl">
            Growth Beyond Fundraising.
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Capital matters. So do markets, customers, partnerships and
            distribution.
          </p>
        </div>

        <InteractiveBoxGroup className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-12">
          <InteractiveBox
            title="Capital"
            content="Strategic fundraising advisory and direct access to an institutional network of growth-stage investors, family offices, and strategic corporate funds."
            icon={<Target size={24} />}
          />
          <InteractiveBox
            title="Markets"
            content="International expansion planning, market entry strategy, and localized GTM execution for companies scaling beyond their home borders."
            icon={<Globe size={24} />}
          />
          <InteractiveBox
            title="Partnerships"
            content="Structuring and negotiating high-value strategic alliances, joint ventures, and corporate development initiatives to accelerate growth."
            icon={<Handshake size={24} />}
          />
          <InteractiveBox
            title="Channels"
            content="Developing enterprise market access, establishing reseller networks, and building systems integration partnerships for scalable distribution."
            icon={<LinkIcon size={24} />}
          />
        </InteractiveBoxGroup>

        <Link
          to="/startups"
          className="group inline-flex items-center text-navy font-semibold hover:text-yellow transition-colors"
        >
          Explore Startup Capabilities{" "}
          <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Section>

      {/* SECTION 5: WHY DECIPHER */}
      <Section bg="white">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-sm font-semibold tracking-widest uppercase text-muted block mb-4">
            WHY DECIPHER
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-navy max-w-3xl mx-auto">
            From Opportunity to Execution.
          </h2>
        </div>

        <InteractiveBoxGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InteractiveBox
            title="Curated Opportunities"
            content="We prioritize quality and strict relevance over sheer volume, ensuring every connection is highly strategic."
          />
          <InteractiveBox
            title="Strategic Access"
            content="Deep, trusted relationships across ambitious founders, institutional investors, and global enterprises."
          />
          <InteractiveBox
            title="Execution Support"
            content="We remain engaged beyond introductions, actively driving the transaction or growth process to completion."
          />
          <InteractiveBox
            title="Long-Term Value"
            content="Building enduring commercial structures around the right capital and relationships, not just chasing the immediate deal."
          />
        </InteractiveBoxGroup>
      </Section>

      <FAQ items={homeFaqs} bg="offwhite" />
      <FAQStructuredData items={homeFaqs} />

      {/* SECTION 6: FINAL CTA */}
      <Section bg="navy">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-display font-medium tracking-tight mb-8">
            Capital. Opportunity. <span className="text-yellow">Growth.</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/70 mb-16 leading-relaxed">
            Whether you’re building the next growth company or looking for
            differentiated private-market opportunities, Decipher helps create
            the right pathway forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              variant="primary"
              size="lg"
              to="/contact?type=investor"
              className="w-full sm:w-auto"
            >
              Join as an Investor
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/contact?type=founder"
              className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:text-black hover:border-white"
            >
              Join as a Founder
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
