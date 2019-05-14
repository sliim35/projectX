import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { NotificationInner } from './NotificationInner';

const portalRoot = document.querySelector('#notification');
const el = document.createElement('div');

export const Notification = (props) => {
  useEffect(() => {
    portalRoot.appendChild(el);
    return () => portalRoot.removeChild(el);
  }, []);

  // eslint-disable-next-line react/react-in-jsx-scope
  return ReactDOM.createPortal(<NotificationInner {...props} />, el);
};
