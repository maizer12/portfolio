'use client';
import CIcon from '@coreui/icons-react';

interface IProps {
  icon: string | string[];
  className?: string;
  style?: any;
}

export const Icon = ({ icon, className = '', style = {} }: IProps) => {
  return <CIcon icon={icon} size="xxl" className={' ' + className} style={style} />;
};
