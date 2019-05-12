import { useEffect } from './node_modules/react';
import ReactDOM from './node_modules/react-dom';

const portalRoot = document.querySelector('#notification');
const el = document.createElement('div');

export const Notification = (props) => {
  useEffect(() => {
    portalRoot.appendChild(el);
    return () => portalRoot.removeChild(el);
  }, []);
  const { children } = props;

  return ReactDOM.createPortal(children, el);
};
