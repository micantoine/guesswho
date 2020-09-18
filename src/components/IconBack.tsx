import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

function IconBack(props:IconProps) {
  return (
    <svg
      width={props.width ? props.width : ''}
      height={props.height ? props.height : 'auto'}
      x="0px" y="0px"
      viewBox="0 0 100 100">
      <path fill="currentColor" d="M97.5,88.7c0-22.6-21.8-53.7-49.4-58.8V11.3L2.5,45.1l45.6,33.8V60C67.4,62,84.6,71.2,97.5,88.7z"/>
    </svg>
  )
}

export default IconBack;