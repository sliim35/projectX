import React from 'react';
import styled from 'styled-components';

const ProductWrapperStyled = styled.div`
  max-width: 320px;
  background-color: #fff;
`;

export const Product = () => {
  return (
    <ProductWrapperStyled>
      <div className="info">На складе</div>
      <div className="image">
        <img
          src="https://s.technopoint.ru/thumb/st1/fit/190/190/92476998a9e71af9a06170afd7cdc359/5bc7af72cf9c92a9e53a4782d0f3229ec19a858404b811f6d7afe05bb82b64ec.jpg"
          alt="alt"
        />
      </div>
      <div className="content">
        <div className="title">Mouse</div>
        <div className="price">100 рублей</div>
      </div>
    </ProductWrapperStyled>
  );
};
