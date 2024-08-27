'use client';
import React, { FC, useEffect } from 'react';
import Badge from '@/shared/common/Badge';
import { Api } from '@/shared/services/api-client';
import { ProjectCategory } from '@prisma/client';

interface IProps {
  activeId: number;
  setActiveId: (id: number) => void;
}

export const ProjectCategories: FC<IProps> = ({ activeId, setActiveId }) => {
  const [categories, setCategories] = React.useState<ProjectCategory[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await Api.projects.getProjectsCategories();
      setCategories(res);
    };

    getCategories();
  }, []);

  return (
    <div className="max-w-[1324px] mx-auto flex gap-3">
      <Badge isActive={activeId === 0} key={0} onClick={() => setActiveId(0)}>
        All
      </Badge>
      {categories.map((e) => (
        <Badge isActive={e.id === activeId} key={e.id} onClick={() => setActiveId(e.id)}>
          {e.name}
        </Badge>
      ))}
    </div>
  );
};
