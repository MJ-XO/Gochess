import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen, Award, Star, Check } from 'lucide-react';
import ProgramEnrollmentForm from '@/components/programs/ProgramEnrollmentForm';

const ProgramCareer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Career-Oriented Coaching"
              subtitle="Build your professional chess career as a player, coach, or arbiter"
              center
            />
            <div className="flex justify-center mt-4 gap-2">
              <Badge className="bg-chess-secondary hover:bg-chess-secondary px-4 py-1 text-white">Advanced Level</Badge>
              <Badge className="bg-chess-primary hover:bg-chess-primary px-4 py-1 text-white">Professional Path</Badge>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Elite Chess Training & Career Development Program</CardTitle>
                  <CardDescription>Comprehensive development for aspiring chess professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-chess-primary" />
                        <span>6-month program</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-chess-primary" />
                        <span>60+ lessons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-chess-primary" />
                        <span>Master coaches</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-chess-primary" />
                        <span>1-on-1 training</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Program Components</h3>
                      
                      <div className="space-y-6">
                        <div className="border-l-4 border-chess-primary pl-4 py-2">
                          <h4 className="font-semibold mb-2">Personalized Opening Repertoire</h4>
                          <p className="text-gray-600">
                            Develop a complete opening repertoire for both white and black, tailored to your playing style and strengths. Learn cutting-edge theory and prepare novelties with master-level analysis.
                          </p>
                        </div>
                        
                        <div className="border-l-4 border-chess-primary pl-4 py-2">
                          <h4 className="font-semibold mb-2">Advanced Strategic Planning</h4>
                          <p className="text-gray-600">
                            Master complex positional concepts, prophylactic thinking, and long-term planning. Learn to evaluate positions accurately and formulate winning plans in various pawn structures.
                          </p>
                        </div>
                        
                        <div className="border-l-4 border-chess-primary pl-4 py-2">
                          <h4 className="font-semibold mb-2">Calculation Training</h4>
                          <p className="text-gray-600">
                            Enhance your tactical vision, calculation accuracy, and decision-making process. Advanced visualization exercises and complex problem-solving to sharpen your analytical skills.
                          </p>
                        </div>
                        
                        <div className="border-l-4 border-chess-primary pl-4 py-2">
                          <h4 className="font-semibold mb-2">Professional Endgame Technique</h4>
                          <p className="text-gray-600">
                            Study theoretical endgames, conversion techniques, and defensive resources. Build a systematic approach to endgame play that will save and win crucial tournament points.
                          </p>
                        </div>
                        
                        <div className="border-l-4 border-chess-primary pl-4 py-2">
                          <h4 className="font-semibold mb-2">Tournament Preparation & Psychology</h4>
                          <p className="text-gray-600">
                            Develop pre-game routines, opponent preparation strategies, and psychological resilience. Learn to manage stress, time pressure, and emotional challenges during competitions.
                          </p>
                        </div>
                        
                        <div className="border-l-4 border-chess-primary pl-4 py-2">
                          <h4 className="font-semibold mb-2">Personalized Game Analysis</h4>
                          <p className="text-gray-600">
                            Regular review of your tournament and practice games with detailed feedback. Identify patterns in your play, address weaknesses, and reinforce strengths.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Who This Program Is For</h3>
                      <p className="text-gray-700">
                        This intensive program is designed for serious competitive players with ratings above 1800 who aspire to achieve FIDE titles, compete internationally, or pursue chess professionally. The program requires significant commitment and regular practice.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Program Benefits</h3>
                      <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 bg-chess-primary rounded-full p-1">
                            <Check size={14} className="text-white" />
                          </div>
                          <span>Personalized training plan</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 bg-chess-primary rounded-full p-1">
                            <Check size={14} className="text-white" />
                          </div>
                          <span>Weekly 1-on-1 sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 bg-chess-primary rounded-full p-1">
                            <Check size={14} className="text-white" />
                          </div>
                          <span>Tournament support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 bg-chess-primary rounded-full p-1">
                            <Check size={14} className="text-white" />
                          </div>
                          <span>Study materials and resources</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 bg-chess-primary rounded-full p-1">
                            <Check size={14} className="text-white" />
                          </div>
                          <span>Progress tracking system</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 bg-chess-primary rounded-full p-1">
                            <Check size={14} className="text-white" />
                          </div>
                          <span>Access to training camps</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <SectionTitle
                title="Apply for Career-Oriented Coaching"
                subtitle="Fill in your details to schedule an evaluation session"
                center
              />
              <ProgramEnrollmentForm programType="career" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramCareer;
