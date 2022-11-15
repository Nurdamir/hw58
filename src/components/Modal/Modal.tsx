import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import {Buttons} from "../../types";
import Button from "../Button/Button";


interface Props extends React.PropsWithChildren{
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  buttons: Buttons[];

}

const Modal: React.FC<Props> = ({show, buttons, title, onClose, children}) => {

  return (
    <>
      <Backdrop show={show}/>

      <div
        className="modal show"
        style={{display: show ? 'block' : 'none'}}
        onClick={onClose}
      >

        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <Button onClick={onClose} type={"btn"}>X</Button>
            </div>
            {children}

            <div className="modal-footer">
              {buttons.map(button => (
                <Button
                  onClick={button.onClick}
                  type={button.type}
                  key={button.type}
                >{button.label}</Button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Modal;