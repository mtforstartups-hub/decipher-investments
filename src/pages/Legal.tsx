import { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  FileText,
  Search,
  Printer,
  Copy,
  Check,
  Download,
  Shield,
  Clock,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { legalDocuments, legalDocSlugs, getLegalDocument, LegalDocument } from '../data/legal';

interface LegalProps {
  defaultSlug?: string;
}

export function Legal({ defaultSlug }: LegalProps) {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const activeSlug = defaultSlug || slug || 'privacy-policy';

  const doc: LegalDocument = useMemo(() => {
    return getLegalDocument(activeSlug) || legalDocuments['privacy-policy'];
  }, [activeSlug]);

  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Filter headings if searching
  const filteredHeadings = useMemo(() => {
    if (!searchQuery.trim()) return doc.headings;
    const q = searchQuery.toLowerCase();
    return doc.headings.filter((h) => h.text.toLowerCase().includes(q));
  }, [doc, searchQuery]);

  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* HERO BANNER */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-gradient-to-b from-slate-900 to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow/20 text-yellow border border-yellow/30 text-xs font-semibold uppercase tracking-wider mb-6">
                <Shield className="w-3.5 h-3.5" />
                Legal & Governance
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-4 text-white">
                {doc.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow" />
                  Effective Date: {doc.effectiveDate}
                </span>
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-yellow" />
                  Source: {doc.filename}
                </span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all backdrop-blur-sm border border-white/15"
                title="Copy link to document"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Link Copied' : 'Share'}
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all backdrop-blur-sm border border-white/15"
                title="Print document"
              >
                <Printer className="w-4 h-4" />
                Print
              </button>
            </div>
          </div>

          {/* DOCUMENT TABS */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
            {legalDocSlugs.map((item) => {
              const isActive =
                item.path === `/legal/${activeSlug}` ||
                (activeSlug === 'privacy-policy' && item.path === '/privacy') ||
                (activeSlug === 'tos' && item.path === '/terms') ||
                (activeSlug === 'cookies-tracking-policy' && item.path === '/cookies');

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-yellow text-navy shadow-md font-bold'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTENT & NAVIGATION GRID */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* SIDEBAR NAVIGATION - Scoped lg:sticky to prevent floating over mobile text */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] flex flex-col gap-4 mb-8 lg:mb-0">
              <div className="flex-1 min-h-0 flex flex-col p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                
                {/* Search in document */}
                <div className="relative mb-3 shrink-0">
                  <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search terms or sections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy text-slate-800 placeholder:text-slate-400"
                  />
                </div>

                {/* Header Row + Mobile Toggle */}
                <div className="flex items-center justify-between shrink-0">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Table of Contents ({filteredHeadings.length})
                  </h3>
                  <button
                    onClick={() => setMobileTocOpen(!mobileTocOpen)}
                    className="lg:hidden p-1 text-slate-500 hover:text-navy flex items-center gap-1 text-xs font-semibold cursor-pointer"
                  >
                    {mobileTocOpen ? 'Hide' : 'Show'}
                    {mobileTocOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Nav list - Collapsible on mobile, always visible on lg */}
                <nav
                  className={`flex-1 min-h-0 overflow-y-auto pr-1 space-y-1 scrollbar-thin transition-all ${
                    mobileTocOpen ? 'block max-h-64 mt-3 pt-2 border-t border-slate-200' : 'hidden lg:block lg:mt-3'
                  }`}
                >
                  {filteredHeadings.map((h, i) => (
                    <a
                      key={h.id || i}
                      href={`#${h.id}`}
                      onClick={() => setMobileTocOpen(false)}
                      className={`block py-1.5 px-3 rounded-lg text-xs md:text-sm transition-colors ${
                        h.level === 1
                          ? 'font-bold text-navy bg-slate-200/60'
                          : h.level === 2
                          ? 'font-medium text-slate-700 hover:text-navy hover:bg-slate-200/40 pl-4'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/30 pl-7 text-xs'
                      }`}
                    >
                      {h.text}
                    </a>
                  ))}

                  {filteredHeadings.length === 0 && (
                    <p className="text-xs text-slate-400 py-4 text-center">
                      No matching sections found.
                    </p>
                  )}
                </nav>
              </div>

              {/* QUICK ASSISTANCE BOX (Desktop) */}
              <div className="hidden lg:block shrink-0 p-5 rounded-2xl bg-navy text-white space-y-3">
                <div className="flex items-center gap-2.5 text-yellow">
                  <HelpCircle className="w-4 h-4 shrink-0" />
                  <h4 className="font-bold text-xs uppercase tracking-wider">Have Questions?</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For legal inquiries or clarifications regarding these terms, contact our compliance team.
                </p>
                <a
                  href="mailto:connect@decipherinvestments.com"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow hover:underline"
                >
                  connect@decipherinvestments.com
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </aside>

            {/* MAIN DOCUMENT BODY */}
            <main className="lg:col-span-8 bg-white">
              <motion.article
                key={doc.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="legal-prose max-w-none"
                dangerouslySetInnerHTML={{ __html: doc.html }}
              />

              {/* QUICK ASSISTANCE BOX (Mobile - at end of contents) */}
              <div className="lg:hidden mt-12 p-6 rounded-2xl bg-navy text-white space-y-3">
                <div className="flex items-center gap-2.5 text-yellow">
                  <HelpCircle className="w-5 h-5 shrink-0" />
                  <h4 className="font-bold text-xs uppercase tracking-wider">Have Questions?</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For legal inquiries or clarifications regarding these terms, contact our compliance team.
                </p>
                <a
                  href="mailto:connect@decipherinvestments.com"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow hover:underline"
                >
                  connect@decipherinvestments.com
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* FOOTER NOTICE */}
              <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-slate-500">
                <p>© {new Date().getFullYear()} Decipher Investment Advisors LLP. All rights reserved.</p>
                <Link to="/contact" className="font-semibold text-navy hover:text-yellow transition-colors flex items-center gap-1">
                  Contact Legal Department <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </main>

          </div>
        </div>
      </section>
    </div>
  );
}
