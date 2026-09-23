import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

const aboutFaqs = [
  {
    question: "What is Decipher Investments?",
    answer: "Decipher Investments is a strategic platform working with startups, growth companies and investors across capital, private markets, market access and strategic growth."
  },
  {
    question: "What is Decipher’s purpose?",
    answer: "Decipher exists to create better connections between companies, capital and strategic opportunities. We help companies access the resources and relationships required for growth while helping investors discover and execute relevant private-market opportunities."
  },
  {
    question: "Who are Decipher’s clients?",
    answer: "Decipher works across both sides of the private-market ecosystem, including startups, growth companies, founders, family offices, venture capital firms, private equity investors, corporate venture funds and strategic investors."
  },
  {
    question: "What makes Decipher different?",
    answer: "Decipher combines capital access, private-market opportunity sourcing and strategic growth support within one relationship-driven platform. The focus is on relevant opportunities, strategic alignment and execution rather than simply making introductions."
  },
  {
    question: "What does “Capital. Opportunity. Growth.” mean for Decipher?",
    answer: "Capital represents fundraising and investment. Opportunity represents private-market access, transactions and strategic relationships. Growth represents market expansion, enterprise access, partnerships and commercial development."
  },
  {
    question: "Why does Decipher work with both startups and investors?",
    answer: "Startups need access to capital, markets and strategic relationships, while investors need access to quality companies and private-market opportunities. Decipher works across both sides to create more relevant connections and better pathways to execution."
  },
  {
    question: "How can someone connect with Decipher?",
    answer: "Founders and growth companies can apply through the founder pathway, while investors can join the investor network. Other strategic partners can contact Decipher directly to discuss potential collaboration."
  }
];

export function About() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* SECTION 1: HERO */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold tracking-widest uppercase text-muted block mb-6">ABOUT DECIPHER</span>
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-navy mb-8 leading-[1.1]">
              Built Around Capital. Opportunity. Growth.
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl font-normal">
              Decipher connects startups and growth companies with capital, markets and strategic relationships, while helping investors access and execute differentiated private-market opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: What Decipher Is */}
      <Section bg="offwhite">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-navy mb-8">
            One Platform. Two Sides of the Market.
          </h2>
          <div className="text-xl md:text-2xl text-muted leading-relaxed space-y-8 max-w-3xl font-normal">
            <p>Decipher works with startups, growth companies and investors across capital, private markets and strategic growth.</p>
            <p>For investors, we help source and execute private-market opportunities.</p>
            <p>For companies, we help unlock capital, markets, partnerships and commercial growth.</p>
          </div>
        </div>
      </Section>

      {/* SECTION 3: Two Ways We Create Value */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* For Investors */}
          <div className="border-t border-border pt-12">
            <h3 className="text-3xl font-display font-medium text-navy mb-4">For Investors</h3>
            <h4 className="text-xl text-yellow font-medium mb-6">Discover. Access. Execute.</h4>
            <p className="text-lg text-muted mb-12 leading-relaxed font-normal">
              Support investors across primary growth-stage opportunities, secondary transactions, pre-IPO opportunities, co-investment, syndication, shareholder liquidity and opportunity sourcing.
            </p>
            <Button variant="link" to="/investors">
              Explore For Investors
            </Button>
          </div>

          {/* For Startups */}
          <div className="border-t border-border pt-12">
            <h3 className="text-3xl font-display font-medium text-navy mb-4">For Startups</h3>
            <h4 className="text-xl text-yellow font-medium mb-6">Raise. Expand. Grow.</h4>
            <p className="text-lg text-muted mb-12 leading-relaxed font-normal">
              Support companies across strategic fundraising, international expansion, GTM, corporate development, enterprise access and channel partnerships.
            </p>
            <Button variant="link" to="/startups">
              Explore For Startups
            </Button>
          </div>
        </div>
      </Section>

      {/* SECTION 4: How We Think */}
      <Section bg="offwhite">
        <div className="max-w-4xl mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-navy mb-8 leading-[1.1]">
            Relationships Create Access. Execution Creates Value.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col">
            <h3 className="text-2xl font-display font-medium text-navy mb-4">Relevance Over Volume</h3>
            <p className="text-lg text-muted leading-relaxed font-normal">The right opportunity matters more than more opportunities.</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-display font-medium text-navy mb-4">Strategy Before Transaction</h3>
            <p className="text-lg text-muted leading-relaxed font-normal">Every capital or commercial decision should support the larger objective.</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-display font-medium text-navy mb-4">Access Through Relationships</h3>
            <p className="text-lg text-muted leading-relaxed font-normal">Private markets and strategic growth are relationship-driven.</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-display font-medium text-navy mb-4">Stay Through Execution</h3>
            <p className="text-lg text-muted leading-relaxed font-normal">Introductions matter. Outcomes matter more.</p>
          </div>
        </div>
      </Section>

      {/* SECTION 5: The Decipher Perspective */}
      <Section bg="navy">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight mb-12 text-yellow leading-[1.1]">
            Private Markets Are Built on Access.<br/>Growth Is Built on Relationships.
          </h2>
          <div className="text-xl md:text-3xl text-white/80 leading-relaxed space-y-8 font-light">
            <p>
              The best opportunities are rarely created through capital alone. They emerge when the right companies, investors, markets and strategic relationships come together at the right time.
            </p>
            <p>
              Decipher exists to help create those connections and move them toward execution.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 6: Core Values (New) */}
      <Section bg="white">
        <div className="max-w-4xl mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase text-muted block mb-6">OUR PRINCIPLES</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-navy mb-8">
            How We Operate
          </h2>
        </div>

        <div className="space-y-12 md:space-y-24">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3">
              <span className="text-5xl md:text-7xl font-display font-medium text-yellow/30 block mb-4">01</span>
              <h3 className="text-3xl font-display font-medium text-navy">Access Over Noise.</h3>
            </div>
            <div className="md:w-2/3 md:pt-6 text-xl md:text-2xl text-muted leading-relaxed max-w-2xl font-normal">
              We believe the most valuable opportunities aren't found in crowded rooms. They are uncovered through trusted, direct relationships and deep market insight.
            </div>
          </div>

          <div className="w-full h-px bg-border"></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3">
              <span className="text-5xl md:text-7xl font-display font-medium text-yellow/30 block mb-4">02</span>
              <h3 className="text-3xl font-display font-medium text-navy">Execution Is Everything.</h3>
            </div>
            <div className="md:w-2/3 md:pt-6 text-xl md:text-2xl text-muted leading-relaxed max-w-2xl font-normal">
              An introduction is just the beginning. We focus on shepherding deals through the complexities of structuring, diligence, and closing.
            </div>
          </div>

          <div className="w-full h-px bg-border"></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3">
              <span className="text-5xl md:text-7xl font-display font-medium text-yellow/30 block mb-4">03</span>
              <h3 className="text-3xl font-display font-medium text-navy">Aligned Interests.</h3>
            </div>
            <div className="md:w-2/3 md:pt-6 text-xl md:text-2xl text-muted leading-relaxed max-w-2xl font-normal">
              We design our partnerships so that we only succeed when our clients and partners succeed. True alignment creates long-term value.
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 7: Leadership */}
      <Section bg="offwhite">
        <div className="max-w-4xl mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-navy mb-8">
            Leadership
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Leadership Profile 1 */}
          <div className="group w-full max-w-md lg:max-w-sm">
            <div className="w-full aspect-[4/5] bg-white mb-8 border border-border relative overflow-hidden flex items-center justify-center">
              <div className="text-6xl font-display font-light text-navy/10">AJ</div>
            </div>
            <h3 className="text-3xl font-display font-medium text-navy mb-2">Abhishek Jain</h3>
            <p className="text-lg text-yellow font-medium mb-6">Managing Partner</p>
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg font-normal">
              Extensive background in global private markets, guiding strategic investments and scaling innovative companies across international ecosystems. Focuses on aligning institutional capital with high-growth technology and infrastructure opportunities.
            </p>
          </div>

          {/* Leadership Profile 2 */}
          
        </div>
      </Section>

      <FAQ items={aboutFaqs} bg="white" />
      <FAQStructuredData items={aboutFaqs} />

      {/* SECTION 8: Final CTA */}
      <Section bg="navy">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white mb-8">
            Two Sides. One Ecosystem.
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 mb-16 leading-relaxed max-w-2xl mx-auto">
            Whether you are building a growth company or investing in one, Decipher helps create the right pathway forward.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Button variant="primary" size="lg" to="/contact?type=founder" className="w-full sm:w-auto">
              Join as a Founder
            </Button>
            <Button variant="outline" size="lg" to="/contact?type=investor" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:text-white hover:border-white">
              Join as an Investor
            </Button>
          </div>

          <p className="text-sm font-medium tracking-widest uppercase text-yellow">
            Capital. Opportunity. Growth.
          </p>
        </div>
      </Section>
    </div>
  );
}
