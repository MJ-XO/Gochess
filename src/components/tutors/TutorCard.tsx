import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Clock, Star, Image as ImageIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface TutorProps {
  tutor: {
    id: number;
    name: string;
    title: string;
    rating: string;
    specialization: string;
    experience: string;
    image: string;
    description: string;
  };
}

const TutorCard: React.FC<TutorProps> = ({ tutor }) => {
  const [currentImage, setCurrentImage] = useState(tutor.image);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [imageUrl, setImageUrl] = useState(tutor.image);

  const handleImageChange = () => {
    if (imageUrl) {
      setCurrentImage(imageUrl);
      setIsEditingImage(false);
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="aspect-[3/2] relative overflow-hidden group">
        <img 
          src={currentImage} 
          alt={tutor.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* <div 
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          onClick={() => setIsEditingImage(true)}
        >
          <ImageIcon className="text-white w-6 h-6 cursor-pointer" />
        </div> */}
      </div>

      {isEditingImage && (
        <div className="p-4 bg-gray-50 border-b flex gap-2">
          <Input
            type="url"
            placeholder="Enter new image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="flex-1"
          />
          <Button size="sm" onClick={handleImageChange}>Save</Button>
          <Button size="sm" variant="outline" onClick={() => setIsEditingImage(false)}>Cancel</Button>
        </div>
      )}

      <CardHeader className="pb-2">
        <CardTitle>{tutor.name}</CardTitle>
        <CardDescription className="text-chess-secondary font-medium">
          {tutor.title}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Star size={16} className="text-chess-primary" />
            <span className="text-sm">{tutor.rating}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={16} className="text-chess-primary" />
            <span className="text-sm">Specializes in: {tutor.specialization}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-chess-primary" />
            <span className="text-sm">Experience: {tutor.experience}</span>
          </div>
          <p className="text-gray-600 mt-3 text-sm">
            {tutor.description}
          </p>
        </div>
      </CardContent>
      {/* <CardFooter className="border-t pt-4">
        <Button className="w-full bg-chess-primary hover:bg-chess-secondary">
          Book a Session
        </Button>
      </CardFooter> */}
    </Card>
  );
};

export default TutorCard;
