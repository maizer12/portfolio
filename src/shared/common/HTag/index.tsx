import cn from 'classnames';
import style from './HTag.module.scss';
import { ReactNode } from 'react';

interface IProps {
  tag: 'h1' | 'h2' | 'h5';
  children: ReactNode;
  title?: string;
  className?: string;
}

export const HTag = ({ tag, children, className = '', title = '' }: IProps) => {
  const classNames = cn(style[tag], style.title, className);

  switch (tag) {
    case 'h1':
      return (
        <h1 className={classNames} title={title} data-twe-toggle="tooltip">
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={classNames} title={title} data-twe-toggle="tooltip">
          {children}
        </h2>
      );
    case 'h5':
      return (
        <h5 className={classNames} title={title} data-twe-toggle="tooltip">
          {children}
        </h5>
      );
  }
};
