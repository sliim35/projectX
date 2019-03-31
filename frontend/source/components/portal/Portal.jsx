import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.querySelector('#nav-bar');
const el = document.createElement('div');

export const Portal = (props) => {
  useEffect(() => {
    portalRoot.appendChild(el);

    return () => portalRoot.removeChild(el);
  }, []);
  const { children } = props;
  return ReactDOM.createPortal(children, el);
};
