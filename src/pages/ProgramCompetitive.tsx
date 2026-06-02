
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/section-title';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, BookOpen, Trophy, Target } from 'lucide-react';
import ProgramEnrollmentForm from '@/components/programs/ProgramEnrollmentForm';

const ProgramCompetitive = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Competitive Players Program"
              subtitle="For those looking to participate in tournaments and improve their rating"
              center
            />
            <div className="flex justify-center mt-4">
              <Badge className="bg-chess-primary px-4 py-1 text-white">Intermediate Level</Badge>
            </div>
          </div>
        </div>

        {/* Program Levels */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Choose Your Competitive Path</h2>
            
            <Tabs defaultValue="levelA" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="levelA">Intermediate A</TabsTrigger>
                <TabsTrigger value="levelB">Intermediate B</TabsTrigger>
              </TabsList>
              
              <TabsContent value="levelA">
                <Card>
                  <CardHeader>
                    <CardTitle>Intermediate A: Tournament Preparation</CardTitle>
                    <CardDescription>Develop skills needed for competitive chess</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-chess-primary" />
                          <span>12 weeks program</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-chess-primary" />
                          <span>18 lessons</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Trophy className="h-5 w-5 text-chess-primary" />
                          <span>Tournament practice</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">What You'll Learn</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Developing a solid opening repertoire</li>
                          <li>Advanced tactical patterns and combinations</li>
                          <li>Positional understanding and evaluation</li>
                          <li>Time management in tournaments</li>
                          <li>Managing tournament psychology</li>
                          <li>Game preparation and analysis</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Perfect For</h3>
                        <p>Players with a basic foundation who want to start competing in tournaments and improve their rating up to 1600-1800 level.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="levelB">
                <Card>
                  <CardHeader>
                    <CardTitle>Intermediate B: Advanced Strategies</CardTitle>
                    <CardDescription>Elevate your competitive play to the next level</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-chess-primary" />
                          <span>14 weeks program</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-chess-primary" />
                          <span>21 lessons</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-chess-primary" />
                          <span>Personalized coaching</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">What You'll Learn</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Critical opening improvements and novelties</li>
                          <li>Complex middlegame strategy</li>
                          <li>Advanced endgame theory</li>
                          <li>Calculation training and visualization</li>
                          <li>Analysis of master games</li>
                          <li>Building a personal study regimen</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Perfect For</h3>
                        <p>Experienced tournament players looking to break through plateaus and reach the 1800-2000+ rating level.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Enrollment Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <SectionTitle
                title="Enroll in the Competitive Players Program"
                subtitle="Fill in your details to join our next batch"
                center
              />
              <ProgramEnrollmentForm programType="competitive" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramCompetitive;
