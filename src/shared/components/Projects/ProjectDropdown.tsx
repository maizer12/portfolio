'use client';
import { techFilters } from '@/_config';
import useUpdateQueryParams from '@/shared/lib/updateQueryParams';
import DropdownMenu from '../../common/Dropdown';

interface IProps {
  filter: string;
}

const ProjectDropdown = ({ filter }: IProps) => {
  const updateQueryParams = useUpdateQueryParams();
  const toggleTechDropdown = (val: string) => {
    updateQueryParams('filter', val);
  };
  return <DropdownMenu onChange={toggleTechDropdown} chose={filter} items={techFilters} />;
};

export default ProjectDropdown;
