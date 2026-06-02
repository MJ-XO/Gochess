
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-chess-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Strategic Thinking?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Join our community of ambitious players who are building elite chess skills and gaining a competitive edge in life.
          </p>
          
          <Link to="/student-registration">
            <Button size="lg" className="bg-white text-chess-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto group">
              Start Your Growth Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-white/70">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-white/70">Expert Coaches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">30K+</div>
              <div className="text-white/70">Coaching Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-white/70">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
