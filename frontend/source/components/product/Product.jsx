import React from 'react';
import styled from 'styled-components';

import { Icon } from '../icon/Icon';
import rubleIcon from '../../static/icons/ruble.svg';
import archiveIcon from '../../static/icons/archive.svg';

import { Link } from 'react-router-dom';

import { ProductType } from '../../types';

const TEXENERGO_CDN = 'https://cdn.texenergo.com';

const ProductWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 288px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 #eee;
  border: 1px solid #eee;
  border-radius: 8px;
  height: 400px;
  cursor: pointer;
  margin: 8px 16px 8px 0;
  padding: 16px 8px;
  transition-duration: 400ms;

  &:hover {
    box-shadow: none;
  }

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
    margin-bottom: 1rem;
    flex-grow: 1;
  }

  .content {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }

  .title {
    height: 64px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2rem;
  }

  .price {
    margin-top: auto;
    font-size: 1.625rem;
    position: relative;
    margin-bottom: 2rem;

    svg {
      z-index: 1;
      opacity: 0.7;
    }
  }

  .info {
    position: relative;
    font-size: 14px;

    span {
      padding-left: 20px;
    }

    svg {
      z-index: 1;
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.titleColor};
  pointer-events: ${(props) => {
    return props.disabled && 'none';
  }};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) =>
    props.disabled ? props.theme.disabledColor : props.theme.mainColor};
  color: ${(props) => props.theme.titleColor};
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  font-weight: 400;
  margin-bottom: 1rem;
  transition-duration: 1s;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? props.theme.disabledColor : props.theme.activeColor};
  }

  svg {
    z-index: 1;
  }
`;

export const Product = (props) => {
  const { product } = props;

  return (
    <ProductWrapperStyled>
      <div className="image">
        {product.image_path ? (
          <img
            src={`${TEXENERGO_CDN}/${product.image_path}`}
            alt={product.name}
          />
        ) : (
          <span>Изображение временно отсутствует</span>
        )}
      </div>
      <div className="content">
        <div className="title">{product.name}</div>
        <div className="price">
          {product.price && product.price !== 0 ? (
            <>
              {parseFloat(product.price).toFixed(2)}
              <Icon
                glyph={rubleIcon.id}
                viewBox={rubleIcon.viewBox}
                width="22"
                height="22"
                ml="8"
              />
            </>
          ) : null}
        </div>
      </div>

      <StyledLink
        to="/product"
        disabled={Boolean(product.stock === 0 || !product.stock)}
      >
        {`${product.stock ? 'Купить' : 'Нет в наличии'}`}
      </StyledLink>

      <div className="info">
        <Icon
          glyph={archiveIcon.id}
          viewBox={archiveIcon.viewBox}
          width="14"
          height="14"
          ml="0"
        />
        <span>{`В наличии: ${product.stock}шт`}</span>
      </div>
    </ProductWrapperStyled>
  );
};

Product.propTypes = {
  product: ProductType.isRequired,
};
