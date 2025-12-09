import { motion } from 'motion/react';
import { Button } from '../../../components/ui/button';
import { Mail } from 'lucide-react';

interface CTASectionProps {
  onContactClick: () => void;
  onViewPortfolio: () => void;
}

export function CTASection({ onContactClick, onViewPortfolio }: CTASectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6">Let's Create Something Amazing Together</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Whether you need stunning video content or eye-catching graphics, I'm here to bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={onContactClick}>
              <Mail className="w-4 h-4 mr-2" />
              Start a Project
            </Button>
            <Button size="lg" variant="outline" onClick={onViewPortfolio}>
              View Full Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}