import React from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

const ToastPortal = ({ children }: PortalProps) => {
  const toastRoot = document.getElementById('toast') as HTMLElement;
  return ReactDOM.createPortal(children, toastRoot);
};

export default ToastPortal;
