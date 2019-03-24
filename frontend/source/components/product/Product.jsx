import React from 'react';
import styled from 'styled-components';

import { ProductType } from '../../types';

const ProductWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 288px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 #f1f1f1;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  height: 400px;
  cursor: pointer;
  margin: 8px 16px 8px 0;
  padding: 8px;

  &:nth-of-type(4n) {
    margin-right: 0;
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    margin: auto;
    align-self: center;
    overflow: hidden;
  }

  .content {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }

  .price {
    margin-top: auto;
  }
`;

const TEXENERGO_CDN = 'https://cdn.texenergo.com';

export const Product = (props) => {
  const { product } = props;
  return (
    <ProductWrapperStyled>
      <div className="info">На складе</div>
      <div className="image">
        <img
          src={`${TEXENERGO_CDN}/${product.image_path}`}
          alt={product.name}
        />
      </div>
      <div className="content">
        <div className="title">{product.name}</div>
        <div className="price">{product.price}</div>
      </div>
    </ProductWrapperStyled>
  );
};

Product.propTypes = {
  product: ProductType.isRequired,
};
