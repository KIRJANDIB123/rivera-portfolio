import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const titles = [
  "Video Editor &\nGraphics Designer",
  "Motion Graphics\nSpecialist",
  "Creative Visual\nStoryteller",
  "Brand Identity\nDesigner",
  "Content Creator &\nAnimator"
];

export function AnimatedTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-32 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 whitespace-pre-line"
        >
          {titles[currentIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
