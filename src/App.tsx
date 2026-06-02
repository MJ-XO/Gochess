import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Tutors from "./pages/Tutors";
import OurTutors from "./pages/OurTutors";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProgramHobby from "./pages/ProgramHobby";
import ProgramCompetitive from "./pages/ProgramCompetitive";
import ProgramCareer from "./pages/ProgramCareer";
import StudentRegistration from "./pages/StudentRegistration";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutors" element={<Tutors />} />
            <Route path="/our-tutors" element={<OurTutors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/program/hobby" element={<ProgramHobby />} />
            <Route path="/program/competitive" element={<ProgramCompetitive />} />
            <Route path="/program/career" element={<ProgramCareer />} />
            <Route path="/student-registration" element={<StudentRegistration />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
