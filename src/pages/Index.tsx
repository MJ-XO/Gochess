
import React from 'react';
import Hero from '@/components/home/Hero';
import Programs from '@/components/home/Programs';
import Institutions from '@/components/home/Institutions';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Testimonials from '@/components/home/Testimonials';
import Outcomes from '@/components/home/Outcomes';
import StrategicAdvantage from '@/components/home/StrategicAdvantage';
import CTA from '@/components/home/CTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StrategicAdvantage />
        <Programs />
        <Outcomes />
        <Testimonials />
        <Institutions />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
