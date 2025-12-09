import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm md:hidden"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-background border-l z-50 md:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3>Menu</h3>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4">
              <a
                href="#about"
                onClick={handleLinkClick}
                className="py-2 hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#portfolio"
                onClick={handleLinkClick}
                className="py-2 hover:text-primary transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#skills"
                onClick={handleLinkClick}
                className="py-2 hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="py-2 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
