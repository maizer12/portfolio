import React from 'react';

export interface DescItem {
  title: string;
  description: string;
}

interface Props {
  className?: string;
  items: DescItem[];
}

export const ProjectDesc: React.FC<Props> = ({ className, items }) => {
  return (
    <ul className={className}>
      {items.map((feature, index) => (
        <li key={index} className="mb-6">
          <h5 className="text-xl font-semibold text-light-900">
            {index + 1}. {feature.title}
          </h5>
          <p className="text-light-400">{feature.description}</p>
        </li>
      ))}
    </ul>
  );
};
