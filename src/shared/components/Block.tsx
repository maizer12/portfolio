import React from 'react';
import { Icon } from '../common/Icon';

export const Block = () => {
  return (
    <div className="right-0 absolute flex gap-3">
      <Icon icon={'FaReact'} className="fill-primary-200 w-9 h-9 animate-[spin_3s_linear_infinite]" />
      <Icon icon={'SiVuedotjs'} className="fill-primary-200 w-9 h-9 animate-pulse" />
      <Icon icon={'SiJavascript'} className="fill-primary-200 w-9 h-9 animate-pulse" />
    </div>
  );
};
