import React from 'react';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: string;
  onClick: () => void;
}

function Button(props:ButtonProps) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      data-oo-button={props.variant ? props.variant : ''}>
      {props.children}
    </button> 
  )
};

export default Button;