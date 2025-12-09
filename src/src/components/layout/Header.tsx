import { Button } from '../../../components/ui/button';
import { Download, Menu } from 'lucide-react';
import resumePDF from '../../../resume/RIVERA_RESUME.pdf'; // import the PDF properly

interface HeaderProps {
  activeSection: string;
  onMenuClick: () => void;
  onResumeDownload: () => void;
}

export function Header({ activeSection, onMenuClick, onResumeDownload }: HeaderProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h2>Quirjhon Dave A. Rivera</h2>
          <div className="hidden md:flex gap-8">
            <a 
              href="#about" 
              className={`hover:text-primary transition-colors ${activeSection === 'about' ? 'text-primary' : ''}`}
            >
              About
            </a>
            <a 
              href="#portfolio" 
              className={`hover:text-primary transition-colors ${activeSection === 'portfolio' ? 'text-primary' : ''}`}
            >
              Portfolio
            </a>
            <a 
              href="#skills" 
              className={`hover:text-primary transition-colors ${activeSection === 'skills' ? 'text-primary' : ''}`}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className={`hover:text-primary transition-colors ${activeSection === 'contact' ? 'text-primary' : ''}`}
            >
              Contact
            </a>
          </div>
          <div className="flex gap-2">
            {/* Direct download link for desktop */}
            <a
              href={resumePDF}  
              download="RIVERA_RESUME.pdf"
              className="hidden md:flex"
            >
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </a>

            {/* Mobile menu button */}
            <Button
              size="icon"
              variant="outline"
              className="md:hidden"
              onClick={onMenuClick}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}