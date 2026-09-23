import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { Section } from '../components/ui/Section';
import { InteractiveBox } from '../components/ui/InteractiveBox';
import { InteractiveBoxGroup } from '../components/ui/InteractiveBoxGroup';
import { Button } from '../components/ui/Button';

const startupsFaqs = [
  {
    question: "How does Decipher help startups raise capital?",
    answer: "Decipher supports startups and growth companies with strategic fundraising by helping clarify capital requirements, position the opportunity, identify relevant investors and facilitate appropriate investor relationships."
  },
  {
    question: "What stage of companies does Decipher work with?",
    answer: "Decipher is designed primarily for startups and growth companies that are preparing for strategic fundraising, market expansion, enterprise growth or the next phase of commercial scale."
  },
  {
    question: "Does Decipher help startups expand internationally?",
    answer: "Yes. Decipher supports international expansion through market-entry strategy, GTM planning, strategic relationships, enterprise introductions, reseller development and other commercial pathways relevant to entering new geographies."
  },
  {
    question: "What is GTM strategy for a growth company?",
    answer: "A go-to-market strategy defines how a company enters and grows in a market, including target customers, positioning, routes to market, partnerships, enterprise access, sales channels and commercial execution."
  },
  {
    question: "Can Decipher help startups access enterprise customers?",
    answer: "Decipher can support enterprise market access by helping companies identify relevant corporate relationships, strategic partners, channel opportunities and potential commercial pathways."
  },
  {
    question: "What are strategic partnerships for startups?",
    answer: "Strategic partnerships can include commercial alliances, distribution relationships, technology partnerships, corporate relationships, channel partnerships and other collaborations that accelerate market access or business growth."
  },
  {
    question: "How does Decipher support channel development?",
    answer: "Decipher can help companies explore reseller networks, distribution relationships, systems integration partners and other channels that can expand commercial reach in existing or new markets."
  },
  {
    question: "What are systems integration partnerships?",
    answer: "Systems integration partnerships involve working with firms that help enterprises implement, integrate or deploy technology solutions. For B2B and enterprise technology companies, these relationships can provide access to larger customers and complex implementation environments."
  },
  {
    question: "Does Decipher provide corporate development support?",
    answer: "Yes. Corporate development support can include identifying strategic relationships, partnerships, market opportunities and other initiatives that support a company’s long-term growth strategy."
  },
  {
    question: "How can a founder start working with Decipher?",
    answer: "Founders can submit information about their company, current stage, fundraising plans, target markets and strategic priorities. Decipher can then evaluate where capital, market access or strategic relationships may be relevant."
  }
];

export function Startups() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* SECTION 1: HERO */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold tracking-widest uppercase text-muted block mb-6">FOR STARTUPS & GROWTH COMPANIES</span>
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-navy mb-8 leading-[1.1]">
              Growth Beyond Fundraising.
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed mb-12 max-w-3xl font-normal">
              Decipher helps ambitious companies access strategic capital, enter new markets, build partnerships and create new commercial pathways.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button variant="primary" size="lg" to="/contact?type=founder" className="w-full sm:w-auto">
                Join as a Founder
              </Button>
              <Button variant="outline" size="lg" to="/contact?type=growth" className="w-full sm:w-auto">
                Discuss Your Growth Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Four Areas of Value */}
      <Section bg="offwhite">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-navy mb-6 max-w-3xl">
            Capital Is One Part of the Growth Equation.
          </h2>
        </div>
        
        <InteractiveBoxGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InteractiveBox 
            title="Capital"
            content="Strategic fundraising advisory and direct access to an institutional network of growth-stage investors, family offices, and strategic corporate funds aligned with your next phase of growth."
          />
          <InteractiveBox 
            title="Markets"
            content="International expansion planning, market entry strategy, and localized GTM execution for companies scaling beyond their home borders."
          />
          <InteractiveBox 
            title="Partnerships"
            content="Structuring and negotiating high-value strategic alliances, joint ventures, and corporate development initiatives to accelerate growth."
          />
          <InteractiveBox 
            title="Channels"
            content="Developing enterprise market access, establishing reseller networks, and building systems integration partnerships for scalable distribution."
          />
        </InteractiveBoxGroup>
      </Section>

      {/* SECTION 3: What We Help With */}
      <Section bg="white">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-navy mb-6">
            Built for Companies Entering Their Next Phase.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
          {[
            'Strategic Fundraising',
            'International Expansion',
            'GTM Strategy',
            'Strategic Partnerships',
            'Corporate Development',
            'Channel Development',
            'Reseller Networks',
            'Systems Integration Partnerships',
            'Enterprise Market Access'
          ].map((capability, i) => (
            <div key={i} className="flex items-center gap-4 p-6 bg-offwhite border border-border">
               <span className="w-1.5 h-1.5 bg-yellow rounded-full flex-shrink-0" />
               <span className="text-lg text-navy font-medium">{capability}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 4: How We Work */}
      <Section bg="offwhite">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-sm font-semibold tracking-widest uppercase text-muted block mb-4">OUR APPROACH</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-navy max-w-3xl mx-auto">
            Strategy. Access. Execution.
          </h2>
        </div>

        <InteractiveBoxGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InteractiveBox 
            title="01. Understand"
            content="Define capital, market and strategic priorities in detail to establish a clear objective."
          />
          <InteractiveBox 
            title="02. Position"
            content="Sharpen the opportunity, narrative and growth case to ensure resonance with target partners or investors."
          />
          <InteractiveBox 
            title="03. Connect"
            content="Create targeted access to investors, enterprises, partners and channels through our established network."
          />
          <InteractiveBox 
            title="04. Execute"
            content="Support discussions, negotiations, and relationships toward successful commercial or capital outcomes."
          />
        </InteractiveBoxGroup>
      </Section>

      {/* SECTION 5: When Decipher Is Most Relevant */}
      <Section bg="white">
        <div className="max-w-4xl mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-navy mb-8">
            When Growth Requires More Than Capital.
          </h2>
        </div>

        <InteractiveBoxGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InteractiveBox 
            title="Raising the Next Round"
            content="You need strategic capital aligned with long-term growth, not just passive funding."
          />
          <InteractiveBox 
            title="Entering a New Market"
            content="You need GTM clarity, local relationships, and accelerated commercial access in new geographies."
          />
          <InteractiveBox 
            title="Building Enterprise Relationships"
            content="You need high-level introductions to potential corporate customers or strategic alliance partners."
          />
          <InteractiveBox 
            title="Expanding Distribution"
            content="You need to structure reseller, channel, or systems-integration relationships to scale revenue."
          />
        </InteractiveBoxGroup>
      </Section>

      <FAQ items={startupsFaqs} bg="offwhite" />
      <FAQStructuredData items={startupsFaqs} />

      {/* SECTION 6: Final CTA */}
      <Section bg="navy">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white mb-8">
            Building the Next Phase of Your Company?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 mb-16 leading-relaxed max-w-2xl mx-auto">
            Tell us where you are going next. We will explore how capital, markets and strategic relationships can help you get there.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary" size="lg" to="/contact?type=founder" className="w-full sm:w-auto">
              Join as a Founder
            </Button>
            <Button variant="outline" size="lg" to="/contact?type=conversation" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:text-white hover:border-white">
              Start a Conversation
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
