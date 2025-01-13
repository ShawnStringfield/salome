import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
  company: string;
  link: string;
  image: string;
  alt: string;
  dateCreated: string;
  tech: string[];
  hasCaseStudy?: boolean;
}

interface ProjectSliderProps {
  projects: Project[];
}

export const ProjectSlider: React.FC<ProjectSliderProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='relative w-full bg-slate-100 overflow-hidden'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectCard
            {...projects[currentIndex]}
            index={currentIndex}
            isLast={currentIndex === projects.length - 1}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
