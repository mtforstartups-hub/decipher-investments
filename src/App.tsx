import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Investors } from './pages/Investors';
import { Startups } from './pages/Startups';
import { About } from './pages/About';
import { Legal } from './pages/Legal';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="investors" element={<Investors />} />
          <Route path="startups" element={<Startups />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Legal defaultSlug="privacy-policy" />} />
          <Route path="terms" element={<Legal defaultSlug="tos" />} />
          <Route path="cookies" element={<Legal defaultSlug="cookies-tracking-policy" />} />
          <Route path="*" element={
            <div className="flex-1 flex items-center justify-center p-12 text-center">
              <div>
                <h1 className="text-4xl font-display font-medium mb-4 text-navy">404</h1>
                <p className="text-muted">Page not found.</p>
              </div>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}
