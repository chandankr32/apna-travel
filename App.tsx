
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FAB from './components/FAB';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Booking />
        <Testimonials />
      </main>
      <Footer />
      <FAB />
    </div>
  );
};

export default App;
