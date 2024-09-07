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
    <span
      className={`border-primary-200 border w-fit min-w-[78px] rounded-md text-light-900 flex justify-center py-1 cursor-pointer px-3 ${className} ${activeClass}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Badge;
