import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import { Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  tags: string[];
  description: string;
}

export function ProjectCard({ title, category, imageUrl, tags, description }: ProjectCardProps) {
  const handleClick = () => {
    toast.info(`Opening project: ${title}`);
    console.log('Project clicked:', title);
    // In a real app, this would navigate to project details or open a modal
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white">{description}</p>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Eye className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-muted-foreground">{category}</p>
        <h3>{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}