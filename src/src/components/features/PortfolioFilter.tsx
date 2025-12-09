import { Button } from '../../../components/ui/button';
import { FilterOption } from '../../types';

interface PortfolioFilterProps {
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

export function PortfolioFilter({ activeFilter, onFilterChange }: PortfolioFilterProps) {
  const filters: FilterOption[] = ['All', 'Video Editing', 'Graphic Design', 'Motion Graphics', 'Flutter Development', 'System Development', 'Web Development', 'Computer & Network Servicing'];

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