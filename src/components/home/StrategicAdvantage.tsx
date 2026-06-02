
import React from 'react';
import SectionTitle from '@/components/ui/section-title';
import { Brain, Lightbulb, Target } from 'lucide-react';

const StrategicAdvantage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-chess-primary/10 text-chess-primary font-medium px-3 py-1 rounded-full mb-6 text-sm">
              Why Chess Matters
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Chess is the gymnasium of the mind.
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              In a world of increasing complexity, chess develops the cognitive skills that create career advantage. 
              Our programs focus on transferable strategic thinking that applies far beyond the board.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-chess-primary/10 p-3 rounded-full mt-1">
                  <Brain className="h-5 w-5 text-chess-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Critical Thinking</h3>
                  <p className="text-gray-600">
                    Chess builds analytical skills and decision-making capabilities that transfer directly to professional settings.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-chess-primary/10 p-3 rounded-full mt-1">
                  <Target className="h-5 w-5 text-chess-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Strategic Foresight</h3>
                  <p className="text-gray-600">
                    Learn to anticipate consequences, plan multiple moves ahead, and adapt to changing situations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-chess-primary/10 p-3 rounded-full mt-1">
                  <Lightbulb className="h-5 w-5 text-chess-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Problem-Solving</h3>
                  <p className="text-gray-600">
                    Develop structured approaches to complex problems that can be applied across domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-chess-primary/10 rounded-lg p-8 relative z-10">
              <blockquote className="text-xl md:text-2xl font-semibold italic text-gray-800">
                "Chess doesn't just build focus and analytical thinking—it fundamentally reshapes how you approach problems in your career and life."
              </blockquote>
              <div className="mt-6">
                <p className="font-bold">Vikram Sharma</p>
                <p className="text-sm text-chess-primary">FIDE Master & Corporate Strategy Consultant</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-full h-full bg-chess-secondary/20 rounded-lg -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicAdvantage;
