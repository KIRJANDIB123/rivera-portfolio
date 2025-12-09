import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { Play, Mail, Linkedin, Instagram } from 'lucide-react';

// Import the profile picture properly
import dp from '../../../assets/dp.png';

interface HeroSectionProps {
  onShowreel: () => void;
  onContactClick: () => void;
}

export function HeroSection({ onShowreel, onContactClick }: HeroSectionProps) {
  const titles = [
    "Video Editing",
    "Graphics Design",
    "Motion Graphics",
    "Application Development",
    "System Development",
    "Web Development",
    "Computer & Network Servicing"
  ];
  const fonts = ["font-sans", "font-serif", "font-mono"];
  const [current, setCurrent] = useState(0);
  const [currentFont, setCurrentFont] = useState(fonts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % titles.length);
      setCurrentFont(fonts[Math.floor(Math.random() * fonts.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Available for Freelance</Badge>

            <h1 className="mb-6 text-4xl sm:text-5xl font-bold leading-tight">
              <motion.div
                key={titles[current]}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-primary ${currentFont}`}
              >
                {titles[current]}
              </motion.div>
            </h1>

            <p className="text-muted-foreground mb-8 text-lg">
              I craft immersive experiences that merge creativity and technology, turning concepts into dynamic visuals, seamless interfaces, and functional digital solutions. 
              From designing captivating motion graphics to building intuitive web, mobile, and system applications, I bring ideas to life in ways that engage and inspire.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={onShowreel}>
                <Play className="w-4 h-4 mr-2" />
                About Me
              </Button>
              <Button size="lg" variant="outline" onClick={onContactClick}>
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <a 
                href="https://www.linkedin.com/in/quir-r-097bba356/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a 
                href="https://www.instagram.com/qj_rivera/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={dp}
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
              <p className="text-4xl mb-1">3+</p>
              <p>Years Experience</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}