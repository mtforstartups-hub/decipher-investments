import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-off-white py-20 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="md:col-span-5 pr-8">
            <span className="text-2xl tracking-tighter font-display uppercase font-semibold text-white mb-6 block">
              <span className="text-decipher-yellow">Decipher</span> Investments
            </span>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
              A global private markets platform operating at the intersection of strategic capital and enterprise commercialization.
            </p>
            
            <form className="max-w-xs" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter" className="block text-xs font-bold tracking-widest uppercase text-white/50 mb-3">
                Market Intelligence
              </label>
              <div className="flex border-b border-white/20 focus-within:border-white/50 transition-colors">
                <input 
                  type="email" 
                  id="newsletter" 
                  placeholder="Email Address" 
                  className="bg-transparent border-none py-2 outline-none w-full text-sm text-white placeholder:text-white/30"
                />
                <button type="submit" className="p-2 text-white/50 hover:text-decipher-yellow transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-6">Platform</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/solutions" className="hover:text-decipher-yellow transition-colors">Solutions</Link></li>
              <li><Link to="/investors" className="hover:text-decipher-yellow transition-colors">For Investors</Link></li>
              <li><Link to="/founders" className="hover:text-decipher-yellow transition-colors">For Founders</Link></li>
              <li><Link to="/opportunities" className="hover:text-decipher-yellow transition-colors">Opportunities</Link></li>
              <li><Link to="/sectors" className="hover:text-decipher-yellow transition-colors">Sectors</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-decipher-yellow transition-colors">About</Link></li>
              <li><Link to="/team" className="hover:text-decipher-yellow transition-colors">Team</Link></li>
              <li><Link to="/global" className="hover:text-decipher-yellow transition-colors">Global Markets</Link></li>
              <li><Link to="/insights" className="hover:text-decipher-yellow transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-decipher-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-6">Connect</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-white/50 mt-0.5 shrink-0" />
                <span className="text-white/80">India • Global</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-3 text-white/50 mt-0.5 shrink-0" />
                <span className="text-white/80">+91 96647 56117</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-3 text-white/50 mt-0.5 shrink-0" />
                <a href="mailto:abhishek@decipherinvestments.com" className="text-white/80 hover:text-decipher-yellow transition-colors">
                  abhishek@decipherinvestments.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Decipher Investments. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
            <Link to="#" className="hover:text-white transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
