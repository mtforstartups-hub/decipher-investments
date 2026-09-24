import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Cookie, X, Check, Settings2, ExternalLink } from 'lucide-react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  timestamp: string;
  version: string;
}

const STORAGE_KEY = 'decipher_cookie_consent_v1';
const POLICY_VERSION = '23 September 2026';

export function CookieConsent() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  // Load saved preferences on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: CookiePreferences = JSON.parse(saved);
        setAnalyticsEnabled(parsed.analytics);
        applyGtagConsent(parsed.analytics);
      } else {
        // No choice yet -> show banner
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
    setHasLoaded(true);

    // Listen for custom open event triggered from footer or legal page
    const handleOpenPreferences = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed: CookiePreferences = JSON.parse(saved);
          setAnalyticsEnabled(parsed.analytics);
        }
      } catch {
        // ignore
      }
      setShowPreferences(true);
      setShowBanner(false);
    };

    window.addEventListener('open-cookie-preferences', handleOpenPreferences);
    return () => window.removeEventListener('open-cookie-preferences', handleOpenPreferences);
  }, []);

  const saveConsent = (analytics: boolean) => {
    const preferences: CookiePreferences = {
      necessary: true,
      analytics,
      timestamp: new Date().toISOString(),
      version: POLICY_VERSION,
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch (e) {
      console.warn('Could not store cookie consent', e);
    }

    setAnalyticsEnabled(analytics);
    applyGtagConsent(analytics);
    setShowBanner(false);
    setShowPreferences(false);

    window.dispatchEvent(
      new CustomEvent('cookie-consent-updated', { detail: preferences })
    );
  };

  const applyGtagConsent = (analyticsGranted: boolean) => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('consent', 'update', {
        analytics_storage: analyticsGranted ? 'granted' : 'denied',
      });
    }
  };

  if (!hasLoaded) return null;

  return (
    <>
      {/* 1. BOTTOM FLOATING BANNER */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-xl z-50 pointer-events-auto"
          >
            <div className="bg-navy text-white p-5 md:p-6 rounded-2xl shadow-2xl border border-white/15 backdrop-blur-lg">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-yellow/20 text-yellow shrink-0 mt-0.5">
                  <Cookie className="w-5 h-5" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold text-base text-white flex items-center gap-2">
                      Cookie & Tracking Choices
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    We use strictly necessary cookies to ensure the website operates securely. With your consent, we also use Google Analytics 4 to understand website interactions and improve our services.
                  </p>
                  <p className="text-xs text-slate-400">
                    Learn more in our{' '}
                    <Link to="/cookies" className="text-yellow hover:underline">
                      Cookie & Tracking Policy
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-yellow hover:underline">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setShowBanner(false);
                    setShowPreferences(true);
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  Manage Preferences
                </button>

                <button
                  type="button"
                  onClick={() => saveConsent(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white hover:bg-white/10 border border-white/20 transition-colors cursor-pointer text-center"
                >
                  Reject Non-Essential
                </button>

                <button
                  type="button"
                  onClick={() => saveConsent(true)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-navy bg-yellow hover:bg-yellow/90 shadow-md transition-all cursor-pointer text-center"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. PREFERENCES MODAL */}
      <AnimatePresence>
        {showPreferences && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200"
            >
              {/* MODAL HEADER */}
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-yellow/20 text-navy">
                    <Shield className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy">Cookie & Tracking Preferences</h3>
                    <p className="text-xs text-slate-500">Effective Date: {POLICY_VERSION}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* MODAL BODY */}
              <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Decipher Investments respects your privacy. You can choose which categories of tracking technology you allow on our website.
                </p>

                {/* CATEGORY 1: STRICTLY NECESSARY */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-navy flex items-center gap-2">
                        Strictly Necessary Technologies
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">Platform & Security</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-200 text-slate-700">
                      Always Active
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    These technologies are essential for the website to function securely, maintain navigation, and deliver core features. They cannot be turned off.
                  </p>
                </div>

                {/* CATEGORY 2: ANALYTICS (GA4) */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 hover:border-slate-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-navy flex items-center gap-2">
                        Analytics Technologies
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">Google Analytics 4 & Tag Manager</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={analyticsEnabled}
                        onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow"></div>
                    </label>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    Allows us to count visits, analyze traffic patterns, and measure interaction so we can improve site content and user experience. Under our consent approach, Google Analytics remains disabled until you choose to allow it.
                  </p>
                </div>

                <div className="pt-2 text-xs text-slate-500 flex items-center justify-between">
                  <Link
                    to="/cookies"
                    onClick={() => setShowPreferences(false)}
                    className="inline-flex items-center gap-1 text-navy font-semibold hover:underline"
                  >
                    View Full Cookie Policy <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* MODAL ACTIONS */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => saveConsent(false)}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-navy hover:bg-slate-200/50 transition-colors cursor-pointer text-center"
                >
                  Reject Non-Essential
                </button>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => saveConsent(true)}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer text-center"
                  >
                    Accept All
                  </button>
                  <button
                    type="button"
                    onClick={() => saveConsent(analyticsEnabled)}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold text-navy bg-yellow hover:bg-yellow/90 shadow-xs transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Save Preferences
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. FLOATING COOKIE BUTTON ON THE RIGHT (Cookie Icon Only) */}
      {!showBanner && !showPreferences && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPreferences(true)}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-navy text-yellow hover:bg-navy/90 border border-white/20 shadow-xl transition-all flex items-center justify-center cursor-pointer group"
          aria-label="Cookie Preferences"
          title="Cookie Preferences"
        >
          <Cookie className="w-5 h-5 transition-transform group-hover:rotate-12" />
        </motion.button>
      )}
    </>
  );
}

// Global utility helper to trigger modal from any link or button
export function openCookiePreferences() {
  window.dispatchEvent(new Event('open-cookie-preferences'));
}
