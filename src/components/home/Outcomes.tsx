import React from 'react';
import SectionTitle from '@/components/ui/section-title';
import { Trophy, Target, Brain, Award } from 'lucide-react';
const Outcomes = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Measurable Outcomes" subtitle="Our approach delivers concrete results for serious players" center />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-chess-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-chess-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">100+</h3>
            <p className="text-gray-700">Average ELO improvement within 6 months</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-chess-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-chess-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">93%</h3>
            <p className="text-gray-700">Students win their first tournament within one year</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-chess-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-chess-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">96%</h3>
            <p className="text-gray-700">Coaching satisfaction score</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-chess-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-chess-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p className="text-gray-700">Report improved focus and strategic thinking</p>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-chess-primary p-8 rounded-lg text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Growth Methodology</h3>
            <p className="mb-6 relative z-10">
              We don't just teach chess moves - we develop strategic thinkers through our proprietary 
              four-step methodology that builds both technical mastery and mental fortitude.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="font-bold text-lg mb-1">01</div>
                <div className="text-sm">Strategic Assessment</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="font-bold text-lg mb-1">02</div>
                <div className="text-sm">Tailored Learning Path</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="font-bold text-lg mb-1">03</div>
                <div className="text-sm">Deliberate Practice</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="font-bold text-lg mb-1">04</div>
                <div className="text-sm">Performance Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Outcomes;