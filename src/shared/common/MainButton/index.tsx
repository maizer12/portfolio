import { ReactNode } from 'react';
import style from './mainButton.module.scss';

interface IProps {
  children: ReactNode;
  className?: string;
}

function MainButton({ children, className = '' }: IProps) {
  return (
    <button className={style.button + ' ' + style.new + ' ' + className}>
      <span>{children}</span>
    </button>
  );
}

export default MainButton;
