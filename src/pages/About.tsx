import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/section-title';
import { Trophy, Award, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-chess-primary">About GoChess</h1>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Your premier chess coaching platform for students and tutors alike
            </p>
            <div className="h-1 w-20 bg-chess-primary mt-4 mx-auto" />
          </div>
        </div>

        {/* Mission and Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At GoChess, our mission is to democratize access to quality chess education. We believe that chess is not just a game but a powerful tool for developing critical thinking, strategic planning, and mental discipline.
                </p>
                <p className="text-gray-700">
                  We aim to create a nurturing environment where students of all levels can learn, practice, and excel in chess under the guidance of verified coaches who are passionate about the game and skilled in teaching.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-700 mb-4">
                  We envision a world where chess is recognized and utilized as an educational tool in schools and communities worldwide. We see GoChess as a catalyst for this change, bringing chess into the mainstream of educational activities.
                </p>
                <p className="text-gray-700">
                  Our vision is to build the most comprehensive and accessible chess coaching platform that serves students, tutors, and institutions with equal effectiveness and excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Our Core Values"
              subtitle="The principles that guide everything we do at GoChess"
              center
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-chess-secondary transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-chess-primary">Excellence</h3>
                <p className="text-gray-600">
                  We are committed to providing the highest quality chess education through rigorous standards and continuous improvement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-chess-secondary transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-chess-primary">Accessibility</h3>
                <p className="text-gray-600">
                  We believe chess education should be available to everyone, regardless of location, age, or background.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-chess-secondary transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-chess-primary">Integrity</h3>
                <p className="text-gray-600">
                  We operate with honesty, transparency, and ethical conduct in all our interactions with students, tutors, and partners.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-chess-secondary transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-chess-primary">Innovation</h3>
                <p className="text-gray-600">
                  We continuously seek new and better ways to teach chess, embracing technology and creative teaching methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Our Founder"
              subtitle="Meet the visionary behind GoChess"
            />
            <div className="grid md:grid-cols-2 gap-12 mt-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-4">Tanisha Gotadke</h2>
                <p className="text-gray-700 mb-4">
                  Founded and grew GoChess Club, a chess startup delivering professional coaching to individuals, corporates, and academies across India, USA, UK, Singapore.
                </p>
                <p className="text-gray-700 mb-4">
                  Built a network of skilled tutors, developed structured training programs, and conducted workshops to promote strategic thinking and problem-solving through chess.
                </p>
                <p className="text-gray-700 mb-4">
                  Led operations, marketing, and client relations, sustaining 4+ years of consistent growth and impact in both educational and corporate spaces.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-3">Achievements</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-chess-primary rounded-full p-1">
                        <Trophy size={16} className="text-white" />
                      </div>
                      <p className="text-gray-700">
                        Participated at 2 Commonwealth Games in 2018, 2019 and 9 National Championships.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-chess-primary rounded-full p-1">
                        <Award size={16} className="text-white" />
                      </div>
                      <p className="text-gray-700">
                        Captained the VTU Chess Team for 4 consecutive years, representing the university.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-chess-primary rounded-full p-1">
                        <Medal size={16} className="text-white" />
                      </div>
                      <p className="text-gray-700">
                        Achieved State Champion title for 3 consecutive years, with numerous podium finishes at state-level tournaments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-chess-secondary/20 rounded-lg transform rotate-3"></div>
                  <img 
                    src="/lovable-uploads/56378c67-8ec9-4132-9691-974474038f5d.png" 
                    alt="Tanisha Gotadke - Founder of GoChess" 
                    className="rounded-lg relative z-10 max-w-sm shadow-lg" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Our Story"
              subtitle="How GoChess came to be and where we're headed"
              center
            />
            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-gray-700 mb-4">
                GoChess was founded by Tanisha Gotadke, a chess enthusiast and educational expert who recognized the need for a structured, accessible platform for chess education in India and beyond.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small initiative to connect chess tutors with students has quickly grown into a comprehensive platform that serves individual learners, competitive players, and educational institutions.
              </p>
              <p className="text-gray-700 mb-4">
                Today, GoChess is proud to host a community of verified tutors and dedicated students who share a passion for the game of chess. Our programs have been carefully designed to cater to different skill levels and goals, ensuring that everyone can find their path to chess mastery.
              </p>
              <p className="text-gray-700">
                As we look to the future, we are excited about expanding our offerings, incorporating new technologies, and reaching more students across the globe. We are committed to our mission of making quality chess education accessible to all and contributing to the growth of chess as an educational tool.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
