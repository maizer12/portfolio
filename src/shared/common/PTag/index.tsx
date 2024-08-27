import { ReactNode } from 'react';
import style from './PTag.module.scss';

interface IProps {
  children?: ReactNode;
  className?: string;
  htmlContent?: string;
  title?: string;
}

export const PTag = ({ children, className = '', htmlContent = '', title = '' }: IProps) => {
  if (htmlContent) {
    return (
      <p className={style.p + ' ' + className} dangerouslySetInnerHTML={{ __html: htmlContent }} title={title}>
        {children}
      </p>
    );
  }

  return (
    <p className={style.p + ' ' + className} title={title}>
      {children}
    </p>
  );
};
