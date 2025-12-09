import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../../../components/ui/badge';
import { PortfolioFilter } from '../features/PortfolioFilter';
import { ProjectCard } from '../features/ProjectCard';
import { ProjectModal } from '../features/ProjectModal';
import { projects } from '../../data/projects';
import { FilterOption, Project } from '../../types';

interface PortfolioSectionProps {
  filter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

export function PortfolioSection({ filter, onFilterChange }: PortfolioSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === filter);
  }, [filter]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <Badge className="mb-4">Portfolio</Badge>
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A selection of my recent work showcasing video editing and graphic design projects
          </p>
        </motion.div>
        <PortfolioFilter
          activeFilter={filter}
          onFilterChange={onFilterChange}
        />
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              layout
            >
              <ProjectCard project={project} onProjectClick={handleProjectClick} />
            </motion.div>
          ))}
        </motion.div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
      
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}