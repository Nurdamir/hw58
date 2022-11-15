import React from 'react';
import Button from "../Button/Button";

interface AlertProps extends React.PropsWithChildren{
  type: string;
  show: boolean;
  onDismiss?: React.MouseEventHandler;
  onclick: React.MouseEventHandler;
}

const Alert: React.FC<AlertProps> = ({type, show, onDismiss, onclick, children}) => {

  return (
    <div className="mb-3">
      <Button
        type={type}
        onClick={onclick}
      >
        Alert
      </Button>
    <div
      style={{display: show ? 'block' : 'none'}}
      className={"alert alert-" + type}>
      {children}
      <div
        className="float-end"
        style={{display: onDismiss ? 'inline-block' : 'none'}}
      >
        <Button onClick={onDismiss} type={type}>X</Button>
      </div>
    </div>
    </div>
  );
};

export default Alert;