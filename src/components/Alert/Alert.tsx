import React from 'react';
import Button from "../Button/Button";
import { motion, AnimatePresence } from "framer-motion"

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
      <AnimatePresence>
        {show && (
          <motion.div
            animate={{
              x: 8,
              y: 0,
              scale: 1,
              rotate: 360,
            }}
            transition={{ duration: 1 }}
            style={{display: show ? 'block' : 'none'}}
            className={"mt-2 alert alert-" + type}>
            {children}
            <div
              className="float-end"
              style={{display: onDismiss ? 'inline-block' : 'none'}}
            >
              <Button onClick={onDismiss} type={type}>X</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Alert;