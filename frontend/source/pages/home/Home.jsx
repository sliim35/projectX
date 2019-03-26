import React from 'react';

import { Link } from 'react-router-dom';

import { Content } from '../../components/content/Content';

export const Home = () => {
  return (
    <Content>
      <Link to="/">Link to home page</Link>
    </Content>
  );
};
