import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/section-title';
import TutorCard from '@/components/tutors/TutorCard';

const OurTutors = () => {
  const tutors = [
    {
      id: 1,
      name: "Abhilash Dandu",
      title: "FIDE Master",
      rating: "FM, 2350 FIDE",
      specialization: "Advanced Tactics & Strategy",
      experience: "10+ years",
      image: "/tutors/AbhilashDandu.jpg",
      description: "Specializes in advanced positional play and endgame techniques. Coached multiple national-level junior players."
    },
    {
      id: 3,
      name: "Keerthi",
      title: "National Instructor",
      rating: "1950 FIDE",
      specialization: "Youth Training",
      experience: "6 years",
      image: "/tutors/Keerthi.jpg",
      description: "Passionate about teaching chess to beginners and young players. Developed a unique curriculum for kids aged 6-12."
    },
    {
      id: 4,
      name: "Nandita",
      title: "FIDE Instructor",
      rating: "2050 FIDE",
      specialization: "Middle Game Strategy",
      experience: "7 years",
      image: "/tutors/Nandita.jpg",
      description: "Former state champion with expertise in positional understanding and strategic planning in middle games."
    },
    {
      id: 5,
      name: "Ritu Kamblekar",
      title: "International Master",
      rating: "IM, 2400 FIDE",
      specialization: "Tournament Preparation",
      experience: "12 years",
      image: "/tutors/RituKamblekar.JPG",
      description: "Specializes in preparing players for international competitions. Former national champion with over 20 tournament wins."
    },
    {
      id: 6,
      name: "Sejal Sinha",
      title: "National Master",
      rating: "NM, 2100 FIDE",
      specialization: "Endgame Techniques",
      experience: "5 years",
      image: "/tutors/SejalSinha.jpg",
      description: "Known for her endgame expertise. Coached multiple junior players to national championship titles."
    },
    {
      id: 7,
      name: "Yogaraj",
      title: "FIDE Trainer",
      rating: "2250 FIDE",
      specialization: "Tactical Patterns",
      experience: "9 years",
      image: "/tutors/Yogaraj.jpg",
      description: "Tactical genius who focuses on pattern recognition and calculation training. Author of 'Tactical Puzzles for Advanced Players'."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <SectionTitle
              title="Meet Our Expert Chess Tutors"
              subtitle="Learn from experienced coaches dedicated to your chess development"
              center
              
            />
          </div>
        </div>

        {/* Tutors Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutors.map(tutor => (
                <TutorCard key={tutor.id} tutor={tutor} />
              ))}
            </div>
          </div>
        </section>

        {/* Join as Tutor CTA */}
        <section className="py-16 bg-chess-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Teaching Team</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Are you passionate about chess and enjoy teaching others? Become a tutor at GoChess and share your knowledge with students worldwide.
            </p>
            <div className="flex justify-center">
              <a 
                href="/tutors" 
                className="inline-block px-6 py-3 bg-white text-chess-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Apply to Become a Tutor
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurTutors;
