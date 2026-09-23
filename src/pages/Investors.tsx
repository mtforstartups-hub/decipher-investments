import { motion } from 'motion/react';
import { FAQ } from '../components/FAQ';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { Section } from '../components/ui/Section';
import { InteractiveBox } from '../components/ui/InteractiveBox';
import { InteractiveBoxGroup } from '../components/ui/InteractiveBoxGroup';
import { Button } from '../components/ui/Button';

const investorsFaqs = [
  {
    question: "How does Decipher help investors access private-market opportunities?",
    answer: "Decipher helps investors identify and access relevant private-market opportunities based on factors such as investment stage, sector, transaction type and strategic fit. Opportunities may include primary growth-stage investments, secondary transactions, pre-IPO opportunities and co-investments."
  },
  {
    question: "What are primary growth-stage investment opportunities?",
    answer: "Primary growth-stage opportunities involve investing capital directly into private companies that are raising funds to expand operations, enter new markets, develop products or accelerate growth."
  },
  {
    question: "What are secondary private-market transactions?",
    answer: "Secondary transactions involve the purchase or sale of existing shares in a private company. Sellers may include founders, employees, early investors or other shareholders seeking liquidity before a public listing or other exit event."
  },
  {
    question: "What are pre-IPO investment opportunities?",
    answer: "Pre-IPO opportunities involve private companies that may be approaching a potential public-market event. Investors may participate in transactions before the company becomes publicly listed, subject to opportunity availability, diligence and applicable regulations."
  },
  {
    question: "Can Decipher help investors with deal sourcing?",
    answer: "Yes. Decipher can support opportunity scouting and buy-side sourcing based on an investor’s mandate, including preferred sectors, stages, geographies, transaction types and strategic priorities."
  },
  {
    question: "What is deal syndication?",
    answer: "Deal syndication involves bringing multiple investors together to participate in a private-market transaction. This can help investors access opportunities where individual allocation requirements, transaction size or strategic participation may otherwise be limiting."
  },
  {
    question: "Does Decipher support co-investment opportunities?",
    answer: "Decipher can work with investors around selected co-investment opportunities where multiple investors participate alongside each other in the same transaction."
  },
  {
    question: "How does Decipher support private-market transaction execution?",
    answer: "Depending on the mandate, Decipher can support opportunity coordination, investor-company introductions, information flow, data room coordination, syndication and other elements of the transaction process."
  },
  {
    question: "Can Decipher help with shareholder liquidity?",
    answer: "Yes. Decipher works across secondary and shareholder-liquidity situations where founders, employees, early investors or other shareholders may be exploring the sale of existing private-company shares."
  },
  {
    question: "Who can join the Decipher investor network?",
    answer: "Decipher is relevant for family offices, venture capital firms, private equity investors, corporate venture funds, strategic investors and other qualified participants seeking private-market opportunities."
  }
];

export function Investors() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* SECTION 1: HERO */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold tracking-widest uppercase text-muted block mb-6">FOR INVESTORS</span>
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-navy mb-8 leading-[1.1]">
              Access Better Opportunities.
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed mb-12 max-w-3xl font-normal">
              Decipher helps investors source, access and execute differentiated opportunities across growth-stage, secondary and pre-IPO private markets.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button variant="primary" size="lg" to="/contact?type=investor" className="w-full sm:w-auto">
                Join the Investor Network
              </Button>
              <Button variant="outline" size="lg" to="/contact?type=mandate" className="w-full sm:w-auto">
                Share Your Investment Mandate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Opportunity Categories */}
      <Section bg="offwhite">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-navy mb-6">
            Private Market Opportunities Across the Growth Lifecycle.
          </h2>
        </div>
        
        <InteractiveBoxGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InteractiveBox 
            title="Primary Growth-Stage"
            content="Access proprietary deal flow for high-growth companies actively raising strategic expansion capital."
          />
          <InteractiveBox 
            title="Secondary Transactions"
            content="Unlock exclusive shareholder liquidity opportunities from founders, employees, and early-stage investors."
          />
          <InteractiveBox 
            title="Pre-IPO Opportunities"
            content="Participate in late-stage funding rounds for mature private companies approaching near-term public-market events."
          />
        </InteractiveBoxGroup>
      </Section>

      {/* SECTION 3: How Decipher Helps Investors */}
      <Section bg="white">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-sm font-semibold tracking-widest uppercase text-muted block mb-4">OUR PROCESS</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-navy max-w-3xl mx-auto">
            From Sourcing to Execution.
          </h2>
        </div>

        <InteractiveBoxGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InteractiveBox 
            title="01. Source"
            content="Identify and originate high-quality opportunities aligned strictly with your sector, stage, and geographic investment mandate."
          />
          <InteractiveBox 
            title="02. Screen"
            content="Evaluate relevance, strategic positioning, and transaction context to separate exceptional signal from market noise."
          />
          <InteractiveBox 
            title="03. Coordinate"
            content="Facilitate discreet introductions, manage data-room access, and orchestrate seamless information flow between parties."
          />
          <InteractiveBox 
            title="04. Execute"
            content="Provide comprehensive support throughout the syndication, co-investment, or execution process to ensure successful closing."
          />
        </InteractiveBoxGroup>
      </Section>

      {/* SECTION 4: Investor Capabilities */}
      <Section bg="offwhite">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-navy mb-6">
            Built Around Access and Execution.
          </h2>
          <p className="text-lg md:text-xl text-muted">A structured approach to private markets.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {[
            'Primary Growth-Stage Opportunities',
            'Secondary Transactions',
            'Pre-IPO Opportunities',
            'Shareholder Liquidity',
            'Buy-Side Sourcing',
            'Sell-Side Support',
            'Deal Syndication',
            'Co-Investment',
            'Opportunity Scouting',
            'Data Room Coordination'
          ].map((capability, i) => (
            <div key={i} className="flex items-center gap-4 p-6 bg-white border border-border">
               <span className="w-1.5 h-1.5 bg-yellow rounded-full flex-shrink-0" />
               <span className="text-lg text-navy font-medium">{capability}</span>
            </div>
          ))}
        </div>
      </Section>

      <FAQ items={investorsFaqs} bg="white" />
      <FAQStructuredData items={investorsFaqs} />

      {/* SECTION 6: Final CTA */}
      <Section bg="navy">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white mb-8">
            Looking for Differentiated Private-Market Opportunities?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 mb-16 leading-relaxed max-w-2xl mx-auto">
            Tell us what you invest in. We will help identify opportunities aligned with your mandate.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary" size="lg" to="/contact?type=investor" className="w-full sm:w-auto">
              Join the Investor Network
            </Button>
            <Button variant="outline" size="lg" to="/contact?type=mandate" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:text-white hover:border-white">
              Share Your Mandate
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
