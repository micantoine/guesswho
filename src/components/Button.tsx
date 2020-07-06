import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
  onClick: () => void;
}

function Button(props:ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      data-oo-button={props.variant ? props.variant : ''}>
      {props.children}
    </button> 
  )
};

export default Button;