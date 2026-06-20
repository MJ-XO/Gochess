
import React from 'react';
import { Card } from '@/components/ui/card';
import SectionTitle from '@/components/ui/section-title';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "-Aditi's Mom, Deepika",
    role: "",
    text: "We are happy with Aisha's experience at GoChess. The bi-weekly classes with Ms.Aditi have been engaging and effective, helping her improve her chess skills and confidence. We appreciate the oppurtunities to play on the Lichess platform and gain practical experience. Thank you to Ms.Tanisha - Founder of GoChess and Ms.Aditi for creating such a postive learning environment. We highly recommend GoChess to young chess learners.",
    rating: 4
  },
  {
    name: "",
    role: "",
    text: "We've seen such a boost in confidence ever since our son started learning chess here. It's not just about the game — it's helping him focus better in school too",
    rating: 5
  },
  {
    name: "",
    role: "",
    text: "The focused programs and elite coaching helped me break through plateaus I'd been stuck at for years. The analytical frameworks have changed how I approach problems.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="What our clients say about us" 
          subtitle="Results from dedicated players who committed to strategic growth"
          center
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-chess-primary/20 absolute -left-2 -top-2" />
                <p className="text-gray-700 italic relative z-10">{testimonial.text}</p>
              </div>
              
              <div className="flex items-center mt-6">
                
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-chess-primary">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
