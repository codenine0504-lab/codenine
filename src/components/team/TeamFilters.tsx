import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type TeamFiltersProps = {
  departments: readonly string[];
  activeFilters: string[];
  onFilterChange: (department: string) => void;
};

export function TeamFilters({ departments, activeFilters, onFilterChange }: TeamFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        variant={activeFilters.length === 0 ? 'default' : 'outline'}
        onClick={() => onFilterChange('__ALL__')}
        className="rounded-full"
      >
        All
      </Button>
      {departments.map((department) => (
        <Button
          key={department}
          variant={activeFilters.includes(department) ? 'default' : 'outline'}
          onClick={() => onFilterChange(department)}
          className="rounded-full"
        >
          {department}
        </Button>
      ))}
    </div>
  );
}
