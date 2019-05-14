import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

const NotificationWrapper = styled(animated.div)`
  position: fixed;
  top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  min-width: 300px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.messageType && props.theme.success};
  background-color: ${(props) => props.theme.notificationBackgroundColor};
`;

export function NotificationInner({ text, show, messageType }) {
  const [isShow, setShow] = useState(false);
  const transitions = useTransition(isShow, null, {
    from: { opacity: 0, right: '0px', life: '100%' },
    enter: { opacity: 1, right: '32px' },
    leave: () => async (next) => {
      await next({ life: '0%' });
      await next({ opacity: 0 });
      await next({ height: 0 });
    },
  });

  useEffect(() => {
    if (show) {
      setShow(true);
    }
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <NotificationWrapper
              key={key}
              style={props}
              messageType={messageType}
            >
              {text}
            </NotificationWrapper>
          )
      )}
    </>
  );
}

NotificationInner.propTypes = {
  text: PropTypes.string.isRequired,
  show: PropTypes.bool,
  messageType: PropTypes.oneOf(['success', 'fail', 'warning']),
};

NotificationInner.defaultProps = {
  messageType: 'success',
  show: false,
};
