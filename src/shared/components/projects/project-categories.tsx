'use client';
import React, { FC, useEffect } from 'react';
import Badge from '@/shared/common/Badge';
import { Api } from '@/shared/services/api-client';
import { ProjectCategory } from '@prisma/client';
import { Skeleton } from '@/shared/common';

interface IProps {
  activeId: number;
  setActiveId: (id: number) => void;
}

export const ProjectCategories: FC<IProps> = ({ activeId, setActiveId }) => {
  const [categories, setCategories] = React.useState<ProjectCategory[]>([]);
  const [loading, setLoading] = React.useState(false);
  const loaders = [...new Array(6)];

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true);
        const res = await Api.projects.getProjectsCategories();
        setCategories(res);
      } catch (error) {
        //console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading)
    return (
      <div className="max-w-[1324px] mx-auto flex gap-3 scroll-auto">
        {loaders.map((e, i) => (
          <Skeleton className="w-[100px] h-[34px] !bg-slate-100 " key={i} />
        ))}
      </div>
    );

  return (
    <div className="max-w-[1324px] mx-auto flex gap-3 scroll-auto overflow-auto pb-3">
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
