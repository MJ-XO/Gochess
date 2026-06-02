
import React from 'react';
import SectionTitle from '@/components/ui/section-title';
import ProgramCard from '@/components/home/ProgramCard';
import { Award, Target, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      id: 'hobby',
      title: 'Foundation Program',
      description: 'Build a solid chess foundation with strategic fundamentals and pattern recognition.',
      topics: [
        'Chess basics and game rules mastery',
        'Essential opening principles and common variations',
        'Basic tactics and pattern recognition',
        'Fundamental endgame techniques',
        'Strategic planning and piece coordination',
        'Calculation methods and visualization',
        'Common middlegame positions',
        'Understanding pawn structures'
      ],
      levels: [
        { name: 'Beginner Level 1', sessions: 10, path: '/program/hobby#level1' },
        { name: 'Beginner Level 2', sessions: 15, path: '/program/hobby#level2' },
        { name: 'Beginner Level 3', sessions: 30, path: '/program/hobby#level3' }
      ],
      audience: 'Perfect for beginners and intermediate players looking to establish a solid foundation in chess.',
      icon: <Award size={28} className="text-white" />
    },
    {
      id: 'competitive',
      title: 'Competitive Edge',
      description: 'Elevate your tournament play with advanced strategies and rating improvement techniques.',
      topics: [
        'Advanced opening repertoire development',
        'Complex middlegame planning and execution',
        'Advanced tactical patterns and combinations',
        'Deep strategic concepts and positional play',
        'Tournament preparation and psychology',
        'Game analysis and improvement methods',
        'Time management techniques',
        'Rating improvement strategies'
      ],
      levels: [
        { name: 'Intermediate A', sessions: 12, path: '/program/competitive#levelA' },
        { name: 'Intermediate B', sessions: 14, path: '/program/competitive#levelB' }
      ],
      audience: 'Players with basic knowledge who want to compete in tournaments and improve their rating.',
      icon: <Trophy size={28} className="text-white" />
    },
    {
      id: 'career',
      title: 'Elite Performance',
      description: 'Comprehensive training for serious players aiming for chess mastery and professional careers.',
      topics: [
        'Professional opening analysis',
        'Advanced strategic planning',
        'Complex endgame theory',
        'Psychological preparation',
        'Personalized game analysis'
      ],
      audience: 'Serious players aiming for titles, high ratings, and professional chess careers.',
      icon: <Target size={28} className="text-white" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="inline-block bg-chess-primary/10 text-chess-primary font-medium px-3 py-1 rounded-full mb-4 text-sm">
              Expert-Led Programs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Strategic Chess Development
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Our structured learning paths are designed for players at every level, focusing on strategic growth and measurable outcomes.
            </p>
          </div>
          
          <Link to="/our-tutors" className="mt-6 md:mt-0">
            <Button variant="outline" className="border-chess-primary text-chess-primary group">
              Meet Our Expert Coaches
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              {...program}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
