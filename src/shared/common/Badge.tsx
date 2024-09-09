import React from 'react';

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const Badge: React.FC<BadgeProps> = ({ className = '', children, isActive = false, onClick }) => {
  const activeClass = isActive ? 'bg-primary-700' : '';
  return (
    <div
      className={`border-primary-200 border w-fit text-nowrap block rounded-md text-light-900 text-center py-1 cursor-pointer px-3 ${className} ${activeClass}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Badge;
