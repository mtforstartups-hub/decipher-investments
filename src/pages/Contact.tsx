import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

export function Contact() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || '';
  
  const [inquiryType, setInquiryType] = useState<string>(initialType);

  // Map incoming generic types from other pages to the select options
  useEffect(() => {
    const type = searchParams.get('type');
    if (type) {
      if (['founder', 'raising'].includes(type)) setInquiryType('founder');
      else if (['growth', 'expansion', 'conversation'].includes(type)) setInquiryType('growth');
      else if (type === 'investor') setInquiryType('investor');
      else if (type === 'mandate') setInquiryType('mandate');
      else if (type === 'buy') setInquiryType('buy');
      else if (type === 'sell') setInquiryType('sell');
      else if (type === 'partnership') setInquiryType('partnership');
    }
  }, [searchParams]);

  const renderFormFields = () => {
    const inputClasses = "w-full bg-offwhite border border-border rounded-none px-4 py-3 text-navy focus:outline-none focus:border-navy focus:bg-white transition-colors placeholder:text-muted";
    
    switch (inquiryType) {
      case 'founder':
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Company Name</label>
                <input type="text" className={inputClasses} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Website</label>
                <input type="url" className={inputClasses} placeholder="https://" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Current Stage</label>
                <div className="relative">
                  <select defaultValue="" className={`${inputClasses} appearance-none`}>
                    <option value="" disabled>Select stage...</option>
                    <option value="seed">Seed / Pre-A</option>
                    <option value="series_a">Series A</option>
                    <option value="series_b">Series B</option>
                    <option value="growth">Growth (Series C+)</option>
                    <option value="pre_ipo">Pre-IPO</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-navy">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Target Capital</label>
                <input type="text" className={inputClasses} placeholder="e.g. $10M" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted uppercase tracking-wider">Additional Context & Traction</label>
              <textarea rows={4} className={`${inputClasses} resize-none`}></textarea>
            </div>
          </>
        );

      case 'growth':
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Company Name</label>
                <input type="text" className={inputClasses} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Target Markets</label>
                <input type="text" className={inputClasses} placeholder="e.g. US, Europe, APAC" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted uppercase tracking-wider">Primary Objectives</label>
              <textarea rows={4} className={`${inputClasses} resize-none`} placeholder="GTM, Channels, Enterprise Access..."></textarea>
            </div>
          </>
        );

      case 'investor':
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Organization / Fund Name</label>
                <input type="text" className={inputClasses} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Investor Type</label>
                <div className="relative">
                  <select defaultValue="" className={`${inputClasses} appearance-none`}>
                    <option value="" disabled>Select type...</option>
                    <option value="vc">Venture Capital</option>
                    <option value="pe">Private Equity</option>
                    <option value="family_office">Family Office</option>
                    <option value="strategic">Corporate / Strategic</option>
                    <option value="hni">HNI / UHNI</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-navy">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted uppercase tracking-wider">Investment Focus & Check Size</label>
              <textarea rows={4} className={`${inputClasses} resize-none`}></textarea>
            </div>
          </>
        );

      case 'mandate':
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Organization</label>
                <input type="text" className={inputClasses} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Target Sectors</label>
                <input type="text" className={inputClasses} placeholder="e.g. Enterprise SaaS, DeepTech" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted uppercase tracking-wider">Mandate Details</label>
              <textarea rows={4} className={`${inputClasses} resize-none`} placeholder="Stage, Geography, Strategy..."></textarea>
            </div>
          </>
        );

      case 'buy':
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Organization / Fund</label>
                <input type="text" className={inputClasses} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Target Company / Asset</label>
                <input type="text" className={inputClasses} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted uppercase tracking-wider">Expected Investment Size & Context</label>
              <textarea rows={4} className={`${inputClasses} resize-none`}></textarea>
            </div>
          </>
        );

      case 'sell':
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Company Name</label>
                <input type="text" className={inputClasses} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider">Current Role</label>
                <div className="relative">
                  <select defaultValue="" className={`${inputClasses} appearance-none`}>
                    <option value="" disabled>Select role...</option>
                    <option value="founder">Founder / Executive</option>
                    <option value="employee">Employee / Ex-Employee</option>
                    <option value="investor">Early Investor / VC</option>
                    <option value="advisor">Advisor</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-navy">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted uppercase tracking-wider">Transaction Details</label>
              <textarea rows={4} className={`${inputClasses} resize-none`} placeholder="Estimated Size, Timeline..."></textarea>
            </div>
          </>
        );

      case 'partnership':
      case 'general':
      default:
        return (
          <>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted uppercase tracking-wider">Organisation</label>
              <input type="text" className={inputClasses} />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted uppercase tracking-wider">Message Details</label>
              <textarea rows={4} className={`${inputClasses} resize-none`}></textarea>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-white">
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-navy mb-8 leading-[1.1]">
              The Right Opportunity Begins With the Right Conversation.
            </h1>
            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl font-normal">
              Tell us what you are building, seeking, buying, selling, or exploring. We will route your enquiry to the most relevant team and process.
            </p>
          </div>
        </div>
      </section>

      <Section bg="offwhite">
        <div className="max-w-3xl">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <label className="text-sm font-display font-medium text-navy uppercase tracking-widest block">How can we help?</label>
              <div className="relative">
                <select 
                  className="w-full bg-white border border-border rounded-none px-4 py-4 text-navy text-lg focus:outline-none focus:border-navy transition-colors appearance-none shadow-sm cursor-pointer"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                >
                  <option value="" disabled>Select an option...</option>
                  <option value="founder">I am a founder raising capital</option>
                  <option value="growth">I am seeking GTM or expansion support</option>
                  <option value="investor">I want to join the investor network</option>
                  <option value="mandate">I want to share my investment mandate</option>
                  <option value="buy">I want to buy private shares</option>
                  <option value="sell">I want to sell private shares</option>
                  <option value="partnership">I want to discuss a partnership</option>
                  <option value="general">General enquiry</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-navy">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L7 7.5L13 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {inquiryType && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-12 border-t border-border space-y-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted uppercase tracking-wider">Full Name</label>
                    <input type="text" className="w-full bg-offwhite border border-border rounded-none px-4 py-3 text-navy focus:outline-none focus:border-navy focus:bg-white transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full bg-offwhite border border-border rounded-none px-4 py-3 text-navy focus:outline-none focus:border-navy focus:bg-white transition-colors" />
                  </div>
                </div>

                {/* Render fields specific to the inquiry type */}
                {renderFormFields()}

                <div className="pt-8">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto px-12">
                    Submit Enquiry
                  </Button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </Section>
    </div>
  );
}
