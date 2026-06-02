import React, { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

interface ProgramEnrollmentFormProps {
  programType: 'hobby' | 'competitive' | 'career';
}

const ProgramEnrollmentForm: React.FC<ProgramEnrollmentFormProps> = ({ programType }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    level: '',
    experience: '',
    rating: '',
    message: '',
  });

  const getProgramTitle = () => {
    switch (programType) {
      case 'hobby':
        return 'Hobby Learners';
      case 'competitive':
        return 'Competitive Players';
      case 'career':
        return 'Career-Oriented Coaching';
      default:
        return 'Chess Program';
    }
  };

  const getLevelOptions = () => {
    switch (programType) {
      case 'hobby':
        return [
          { value: 'beginner1', label: 'Beginner Level 1' },
          { value: 'beginner2', label: 'Beginner Level 2' },
          { value: 'beginner3', label: 'Beginner Level 3' },
        ];
      case 'competitive':
        return [
          { value: 'intermediateA', label: 'Intermediate A' },
          { value: 'intermediateB', label: 'Intermediate B' },
        ];
      case 'career':
        return [
          { value: 'advanced', label: 'Elite Chess Training Program' },
        ];
      default:
        return [];
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'program_enrollments'), {
        ...formData,
        programType,
        programTitle: getProgramTitle(),
        createdAt: Timestamp.now(),
      });
      toast({
        title: 'Enrollment Submitted Successfully',
        description: 'We’ll contact you soon with more details. Thank you!',
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        level: '',
        experience: '',
        rating: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting enrollment:', error);
      toast({
        title: 'Something went wrong',
        description: 'Please try again later.',
      });
    }
  };

  return (
    <Card className="p-6 mt-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">Program Details</h3>
          <div className="space-y-2">
            <Label htmlFor="program">Program</Label>
            <Input id="program" value={getProgramTitle()} disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="level">Level</Label>
            <Select value={formData.level} onValueChange={(value) => handleSelectChange('level', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your level" />
              </SelectTrigger>
              <SelectContent>
                {getLevelOptions().map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience">Chess Experience</Label>
            <Select value={formData.experience} onValueChange={(value) => handleSelectChange('experience', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None (Complete Beginner)</SelectItem>
                <SelectItem value="basic">Basic Knowledge</SelectItem>
                <SelectItem value="casual">Casual Player</SelectItem>
                <SelectItem value="tournament">Tournament Experience</SelectItem>
                <SelectItem value="rated">Rated Player</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {(programType === 'competitive' || programType === 'career') && (
            <div className="space-y-2">
              <Label htmlFor="rating">Chess Rating (if any)</Label>
              <Input id="rating" value={formData.rating} onChange={handleChange} placeholder="Enter your FIDE/National rating" />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Information</Label>
          <Textarea 
            id="message" 
            value={formData.message} 
            onChange={handleChange}
            placeholder="Tell us about your chess goals, preferred schedule, or any questions you have."
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full bg-chess-primary hover:bg-chess-secondary">
          Submit Enrollment
        </Button>
      </form>
    </Card>
  );
};

export default ProgramEnrollmentForm;
  