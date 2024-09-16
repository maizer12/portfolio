'use client';
import DropdownMenu from '../../common/Dropdown';
import { Technology } from '@prisma/client';
import { FC, useEffect, useMemo, useState } from 'react';
import { getTechnologies } from '@/shared/services/technologies';
import { Icon } from '@/shared/common/Icon';
import { Skeleton } from '@/shared/common';
import { LayoutGrid } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
  activeTechnologies: number;
  setActiveTechnologies: (id: number) => void;
}

const ProjectDropdown: FC<Props> = ({ className, activeTechnologies, setActiveTechnologies }) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setIsLoading(true);
        const res = await getTechnologies();
        setTechnologies(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  const getActiveTechnologies = useMemo(() => {
    if (!technologies || !activeTechnologies) return null;

    const active = technologies.find((cat) => cat.id === activeTechnologies);
    return active;
  }, [activeTechnologies, technologies]);

  const setActive = (id: number) => {
    setActiveTechnologies(id);
    setOpen(false);
  };

  const getIcon = getActiveTechnologies ? (
    <Icon className="w-6 h-6" icon={getActiveTechnologies.icon} />
  ) : (
    <LayoutGrid />
  );

  if (isLoading) return <Skeleton className="w-[220px] rounded-none" />;

  return (
    <DropdownMenu
      label={getActiveTechnologies?.name || 'All'}
      text="Filtered By:"
      Icon={getIcon}
      isOpen={open}
      setIsOpen={setOpen}
    >
      <ul className="absolute bg-dark-700 border border-primary-200 mt-2 min-w-[180px] gap-10 max-h-[220px] overflow-auto">
        <li
          className={`hover:bg-dark-500 cursor-pointer flex text-light-900 justify-between p-4 py-2 fill-primary-200 
              ${activeTechnologies === 0 ? ' bg-primary-700 fill-light-900' : ''}`}
          onClick={() => setActive(0)}
        >
          All
          <LayoutGrid />
        </li>
        {technologies.map((cat, index) => (
          <li
            key={index}
            className={`hover:bg-dark-500 cursor-pointer flex text-light-900 justify-between p-4 py-2 fill-primary-200 
              ${activeTechnologies === cat.id ? ' bg-primary-700 fill-light-900' : ''}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.name}
            <Icon icon={cat.icon} className={`w-6 h-6 ${cat.color}`} />
          </li>
        ))}
      </ul>
    </DropdownMenu>
  );
};

export default ProjectDropdown;
