'use client';
import DropdownMenu from '../../common/Dropdown';
import { Technology } from '@prisma/client';
import { useEffect, useMemo, useState } from 'react';
import { getTechnologies } from '@/shared/services/technologies';
import { Icon } from '@/shared/common/Icon';

const ProjectDropdown = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const fetchTechnologies = async () => {
      const res = await getTechnologies();
      setTechnologies(res);
    };

    fetchTechnologies();
  }, []);

  const getActiveCategory = useMemo(() => {
    if (!technologies || !activeCategory) return null;

    const active = technologies.find((cat) => cat.id === activeCategory);
    return active;
  }, [activeCategory, technologies]);

  if (technologies.length === 0) return null;

  return (
    <DropdownMenu
      label={getActiveCategory?.name || 'All'}
      text="Filtered By:"
      icon={getActiveCategory?.icon || 'cibCodeClimate'}
    >
      <ul className="absolute bg-dark-700 border border-primary-200 mt-2 min-w-[180px] gap-10 max-h-[220px] overflow-auto">
        {technologies.map((cat, index) => (
          <li
            key={index}
            className={`hover:bg-dark-500 cursor-pointer flex text-light-900 justify-between p-4 py-2 fill-primary-200 
              ${activeCategory === cat.id ? ' bg-primary-700 fill-light-900' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
            <Icon icon={cat.icon} className={`w-6 ${cat.color}`} />
          </li>
        ))}
      </ul>
    </DropdownMenu>
  );
};

export default ProjectDropdown;
