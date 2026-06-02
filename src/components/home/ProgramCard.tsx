
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface Level {
  name: string;
  sessions: number;
  path: string;
}

interface ProgramCardProps {
  id: string;
  title: string;
  description: string;
  topics: string[];
  audience: string;
  icon: React.ReactNode;
  levels?: Level[];
}

// Helper function to generate program links
const getProgramLink = (programId: string) => {
  return `/program/${programId}`;
};

const ProgramCard = ({
  id,
  title,
  description,
  topics,
  audience,
  icon,
  levels
}: ProgramCardProps) => {
  const navigate = useNavigate();

  const handleLevelClick = (path: string) => {
    navigate(path);
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden border-0 group">
      <CardContent className="p-0">
        <div className="bg-chess-primary text-white p-6 flex items-start gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          <div className="bg-white/20 p-3 rounded-full">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white/90 text-sm">{description}</p>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3">Strategic Outcomes:</h4>
            <ul className="space-y-2">
              {topics.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-chess-secondary flex-shrink-0 mr-2 mt-0.5" />
                  <span className="text-gray-700">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {levels && levels.length > 0 && (
            <div>
              <h4 className="font-semibold text-lg mb-3">Program Structure:</h4>
              <div className="grid gap-2">
                {levels.map((level, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 border border-gray-100 px-4 py-3 rounded-md cursor-pointer hover:bg-gray-100 transition-colors flex justify-between items-center"
                    onClick={() => handleLevelClick(level.path)}
                  >
                    <div>
                      <span className="font-medium">{level.name}</span>
                      <span className="text-sm text-gray-500 ml-2">{level.sessions} sessions</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-chess-primary" />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div>
            <h4 className="font-semibold text-lg mb-2">Ideal For:</h4>
            <p className="text-gray-600 italic border-l-2 border-chess-secondary pl-3">{audience}</p>
          </div>
          
          <Link to={getProgramLink(id)} className="block">
            <Button className="w-full bg-chess-primary hover:bg-chess-secondary group">
              Explore Program
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
