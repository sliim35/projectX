import React from 'react';

import { Container } from '../../components/container/Container';

import { ContentStyled } from './styles/ContentStyled';

export const Content = () => {
  return (
    <>
      <ContentStyled>
        <Container>
          <p>
            This is content!!!!!!!!! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid sint quibusdam corrupti itaque amet
            dolorum, eos commodi voluptate reiciendis voluptas?
          </p>
        </Container>
      </ContentStyled>
    </>
  );
};
