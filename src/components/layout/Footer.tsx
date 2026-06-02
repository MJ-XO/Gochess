
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chess-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/9cad5bba-a5f1-41c7-a40b-7c27a774caa3.png" 
                alt="GoChess Logo" 
                className="h-12 mr-2 bg-white p-1 rounded" 
              />
            </div>
            <p className="text-gray-300 mb-4">Your Ultimate Hub for Chess Mastery!</p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <Phone size={18} />
              <span>+91 87625 62549</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail size={18} />
              <span>contact.gochess@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-chess-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-chess-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/tutors" className="text-gray-300 hover:text-chess-secondary transition-colors">
                  Become a Tutor
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-chess-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/program/hobby" className="text-gray-300 hover:text-chess-secondary transition-colors">
                  Hobby Learners
                </Link>
              </li>
              <li>
                <Link to="/program/competitive" className="text-gray-300 hover:text-chess-secondary transition-colors">
                  Competitive Players
                </Link>
              </li>
              <li>
                <Link to="/program/career" className="text-gray-300 hover:text-chess-secondary transition-colors">
                  Career-Oriented Coaching
                </Link>
              </li>
              <li>
                <Link to="/our-tutors" className="text-gray-300 hover:text-chess-secondary transition-colors">
                  For Institutions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-chess-secondary mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GoChess. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
