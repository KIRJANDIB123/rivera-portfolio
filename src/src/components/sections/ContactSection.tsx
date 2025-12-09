import { motion } from 'motion/react';
import { Badge } from '../../../components/ui/badge';
import { ContactForm } from '../features/ContactForm';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactSection() {
  const handleContactInfoClick = (type: string, value: string) => {
    navigator.clipboard.writeText(value);
    toast.success(`${type} copied to clipboard!`);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Get In Touch</Badge>
            <h2 className="mb-6">Let's Talk About Your Project</h2>
            <p className="text-muted-foreground mb-8">
              I'm always excited to discuss new projects and creative opportunities. 
              Feel free to reach out and let's create something amazing together.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => handleContactInfoClick('Email', 'quirjhon01@gmail.com')}
                className="flex items-center gap-3 w-full text-left hover:bg-accent/50 p-3 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p>quirjhon01@gmail.com</p>
                </div>
              </button>
              <button
                onClick={() => handleContactInfoClick('LinkedIn', 'https://www.linkedin.com/in/quir-r-097bba356/')}
                className="flex items-center gap-3 w-full text-left hover:bg-accent/50 p-3 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">LinkedIn</p>
                  <p>https://www.linkedin.com/in/quir-r-097bba356/</p>
                </div>
              </button>
              <button
                onClick={() => handleContactInfoClick('Instagram', '@qj_rivera')}
                className="flex items-center gap-3 w-full text-left hover:bg-accent/50 p-3 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">Instagram</p>
                  <p>@qj_rivera</p>
                </div>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}