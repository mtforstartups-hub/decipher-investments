/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Investors from './pages/Investors';
import Founders from './pages/Founders';
import Opportunities from './pages/Opportunities';
import Sectors from './pages/Sectors';
import GlobalMarkets from './pages/GlobalMarkets';
import Insights from './pages/Insights';
import Team from './pages/Team';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/global" element={<GlobalMarkets />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
