
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Institutions = () => {
  const features = [
    {
      title: 'Verified Coaches',
      description: 'All our tutors are thoroughly vetted for qualifications, experience, and teaching ability.'
    },
    {
      title: 'Flexible Hiring',
      description: 'Choose between online classes, in-person sessions, or a hybrid approach to suit your needs.'
    },
    {
      title: 'Custom Curriculum',
      description: 'We work with your institution to develop a chess program aligned with your educational goals.'
    },
    {
      title: 'Regular Progress Reports',
      description: 'Receive detailed updates on student performance and program effectiveness.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="institutions">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Tutor Placement for Institutions" 
          subtitle="Bring the benefits of chess education to your school or academy"
          center
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-chess-primary rounded-full p-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/our-tutors">
              <Button size="lg" className="bg-chess-primary hover:bg-chess-secondary">
                Hire a Tutor
              </Button>
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border chess-gradient">
            <h3 className="text-2xl font-bold mb-4">Benefits for Institutions</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={16} className="text-green-600" />
                </div>
                <span>Enhance students' critical thinking abilities</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={16} className="text-green-600" />
                </div>
                <span>Improve concentration and focus</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={16} className="text-green-600" />
                </div>
                <span>Develop problem-solving and planning skills</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={16} className="text-green-600" />
                </div>
                <span>Foster sportsmanship and healthy competition</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={16} className="text-green-600" />
                </div>
                <span>Position your institution as innovative and forward-thinking</span>
              </li>
            </ul>
            
            <div className="bg-gray-50 p-4 rounded-lg mt-6">
              <p className="text-sm italic text-gray-600">
                "The chess program has been a tremendous addition to our curriculum. Students show improved focus in other subjects too."
              </p>
              <p className="text-sm font-semibold mt-2">- Principal, Delhi Public School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institutions;
