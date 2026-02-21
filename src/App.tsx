/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <About />
      </main>
      <Footer />
    </div>
  );
}
