import { motion } from 'motion/react';
import { Badge } from '../../../components/ui/badge';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Badge className="mb-4">About Me</Badge>
          <h2 className="mb-6">Passionate About Crafting Experiences</h2>
          <p className="text-muted-foreground text-lg mb-6">
            With over 3 years of experience, I craft immersive experiences that blend creativity and technology. From video editing, motion design, and graphic storytelling to web, mobile, and system development, I bring ideas to life in ways that are both visually engaging and technically sound.
          </p>
          <p className="text-muted-foreground text-lg">
            My approach combines innovative techniques with timeless design principles, ensuring every project—whether a dynamic visual campaign, an interactive application, or a functional IT solution—communicates effectively, resonates with audiences, and leaves a lasting impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}