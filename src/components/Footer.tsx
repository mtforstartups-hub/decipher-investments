import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import logo from '../../assets/logo-one.svg'

export function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-12 mt-auto">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div className="space-y-4">
            <Link to="/" className="block text-2xl font-display font-bold tracking-tight text-navy">
              <img
            src={logo}
            alt="Decipher Investments"
            className="h-14 w-auto object-contain"
          />
            </Link>
            <p className="text-sm font-medium text-muted tracking-wide uppercase">Capital. Opportunity. Growth.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button variant="outline" size="sm" to="/contact">Join as Founder</Button>
            <Button variant="outline" size="sm" to="/contact">Join as Investor</Button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-muted">
            <Link to="/investors" className="hover:text-navy transition-colors">For Investors</Link>
            <Link to="/startups" className="hover:text-navy transition-colors">For Startups</Link>
            <Link to="/about" className="hover:text-navy transition-colors">About</Link>
            <Link to="/contact" className="hover:text-navy transition-colors">Contact</Link>
            <a href="#" className="hover:text-navy transition-colors">LinkedIn</a>
            <Link to="/privacy" className="hover:text-navy transition-colors">Privacy Policy</Link>
          </nav>
          <p className="text-sm font-medium text-muted">© {new Date().getFullYear()} Decipher</p>
        </div>
      </div>
    </footer>
  );
}
