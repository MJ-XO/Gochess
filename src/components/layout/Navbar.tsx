
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b py-4 px-4 md:px-6 bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/9cad5bba-a5f1-41c7-a40b-7c27a774caa3.png" 
            alt="GoChess Logo" 
            className="h-24 md:h-28" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-base font-medium hover:text-gochess-orange transition-colors font-inter">
            Home
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-medium hover:text-gochess-orange transition-colors bg-transparent font-inter">Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/program/hobby" className="block p-3 hover:bg-gray-100 rounded-md font-inter text-base">Foundation Program</Link>
                    <Link to="/program/competitive" className="block p-3 hover:bg-gray-100 rounded-md font-inter text-base">Competitive Players</Link>
                    <Link to="/program/career" className="block p-3 hover:bg-gray-100 rounded-md font-inter text-base">Professional Training</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link to="/about" className="text-base font-medium hover:text-gochess-orange transition-colors font-inter">
            About Us
          </Link>
          {/* <Link to="/our-tutors" className="text-base font-medium hover:text-gochess-orange transition-colors font-inter">
            Our Tutors
          </Link> */}
          <Link to="/contact" className="text-base font-medium hover:text-gochess-orange transition-colors font-inter">
            Contact
          </Link>
          <Link to="/tutors" className="text-base font-medium hover:text-gochess-orange transition-colors font-inter">
            Become a Tutor
          </Link>
          
          <Link to="/student-registration " className="text-base font-medium hover:text-gochess-orange transition-colors font-inter">
            Join as student
          </Link> 

          <Button variant="outline" className="border-gochess-orange text-gochess-orange hover:bg-gochess-orange hover:text-white hover:bg-black  text-base font-inter" onClick={()=>{window.open("https://phantom-chess-56mz.vercel.app/dashboard","_blank")}}>
            <Gamepad2 className="mr-2 h-4 w-4" />
            Play Chess Variants
          </Button>
          
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-white z-50 border-b shadow-lg">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium py-2 hover:text-gochess-orange transition-colors font-inter text-base"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <div className="py-2">
              <p className="font-medium mb-2 font-inter text-base">Courses</p>
              <div className="pl-4 space-y-2">
                <Link 
                  to="/program/hobby" 
                  className="block py-1 hover:text-gochess-orange transition-colors font-inter text-base"
                  onClick={toggleMenu}
                >
                  Foundation Program
                </Link>
                <Link 
                  to="/program/competitive" 
                  className="block py-1 hover:text-gochess-orange transition-colors font-inter text-base"
                  onClick={toggleMenu}
                >
                  Competitive Players
                </Link>
                <Link 
                  to="/program/career" 
                  className="block py-1 hover:text-gochess-orange transition-colors font-inter text-base"
                  onClick={toggleMenu}
                >
                  Professional Training
                </Link>
              </div>
            </div>
            <Link 
              to="/about" 
              className="font-medium py-2 hover:text-gochess-orange transition-colors font-inter text-base"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/our-tutors" 
              className="font-medium py-2 hover:text-gochess-orange transition-colors font-inter text-base"
              onClick={toggleMenu}
            >
              Our Tutors
            </Link>
            <Link 
              to="/contact" 
              className="font-medium py-2 hover:text-gochess-orange transition-colors font-inter text-base"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              to="/tutors" 
              className="font-medium py-2 hover:text-gochess-orange transition-colors font-inter text-base"
              onClick={toggleMenu}
            >
              Become a Tutor
            </Link>
            <Button 
              variant="outline" 
              className="border-gochess-orange text-gochess-orange hover:bg-gochess-orange hover:text-white w-full font-inter"
              onClick={toggleMenu}
            >
              <Gamepad2 className="mr-2 h-4 w-4" />
              Play Chess Variants
            </Button>
            <Link 
              to="/student-registration" 
              onClick={toggleMenu}
            >
              <Button className="bg-gochess-blue hover:bg-gochess-navy w-full font-inter">
                Join as Student
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
