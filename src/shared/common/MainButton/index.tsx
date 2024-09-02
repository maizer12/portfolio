import { ReactNode } from 'react';
import style from './mainButton.module.scss';
import { cn } from '@/shared/lib/utils';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

function MainButton({ children, className = '', ...props }: IProps) {
  return (
    <button className={cn(style.button, style.new, className)} {...props}>
      <span>{children}</span>
    </button>
  );
}

export default MainButton;
