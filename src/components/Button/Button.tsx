import React from 'react';
import {Buttons} from "../../types";


interface ButtonProps extends React.PropsWithChildren {
  onClick?: React.MouseEventHandler;
  type: string;
}


const Button: React.FC<ButtonProps> = ({onClick, type, children}) => {
  return (
    <button
      onClick={onClick}
      className={['btn', `btn-${type}`].join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;