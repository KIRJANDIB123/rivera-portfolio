import { Button } from './ui/button';

interface PortfolioFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function PortfolioFilter({ activeFilter, onFilterChange }: PortfolioFilterProps) {
  const filters = ['All', 'Video Editing', 'Graphic Design', 'Motion Graphics'];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? 'default' : 'outline'}
          onClick={() => onFilterChange(filter)}
          className="transition-all"
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
