import React, { useContext } from 'react';
import styled from 'styled-components';

import { CartContext } from '../../store/contexts/CartContext';

import { Container } from '../../components/container/Container';
import { Content } from '../../components/content/Content';
import { LeadTitle } from '../../components/lead-title/LeadTitle';
import { Icon } from '../../components/icon/Icon';
import rubleIcon from '../../static/icons/ruble.svg';

const TEXENERGO_CDN = 'https://cdn.texenergo.com';

const CartContentWrapper = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;

  .product-wrapper {
    display: flex;
    align-items: center;
    height: 64px;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    color: ${(props) => props.theme.textColor};
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    width: 60px;
    height: 60px;
    overflow: hidden;
  }

  .name {
    width: 300px;
    overflow-wrap: break-word;
    word-break: break-word;
    margin-right: 1rem;
  }

  .quantity {
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.borderColor};
    margin-right: 1rem;
  }

  .price {
    position: relative;

    svg {
      z-index: 1;
      opacity: 0.7;
    }
  }

  .total {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.5rem;
    color: ${(props) => props.theme.titleColor};

    svg {
      z-index: 1;
      opacity: 0.7;
    }
  }

  .right-aligned {
    margin-left: auto;
  }
`;

const OrderButtonStyled = styled.button`
  color: ${(props) => props.theme.titleColor};
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
  cursor: pointer;
  height: 48px;
  margin-top: 2rem;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? props.theme.disabledColor : props.theme.activeColor};
  }
`;

export const Cart = () => {
  const { cartState } = useContext(CartContext);
  const { cart } = cartState;
  console.log(cart);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Content>
      <Container>
        <LeadTitle>{`Корзина (${cart.length})`}</LeadTitle>
        <CartContentWrapper>
          {cart.length > 0 ? (
            <>
              <ul className="products-list">
                {cart.map((product) => (
                  <li className="product-wrapper" key={product.id}>
                    <div className="image">
                      {product.image_path && (
                        <img
                          src={`${TEXENERGO_CDN}/${product.image_path}`}
                          alt={product.name}
                        />
                      )}
                    </div>
                    <div className="name">
                      {capitalizeFirstLetter(product.name.toLowerCase())}
                    </div>
                    <div className="quantity">{product.quantity}</div>
                    <div className="right-aligned">
                      <div className="price">
                        {product.price && product.price !== 0 ? (
                          <>
                            {parseFloat(product.price).toFixed(2)}
                            <Icon
                              glyph={rubleIcon.id}
                              viewBox={rubleIcon.viewBox}
                              width="16"
                              height="16"
                              ml="4"
                            />
                          </>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="total">
                <span>Всего:</span>
                <span>
                  {parseFloat(
                    cart.reduce(
                      (accumulator, product) =>
                        accumulator + product.price * product.quantity,
                      0
                    )
                  ).toFixed(2)}
                  <Icon
                    glyph={rubleIcon.id}
                    viewBox={rubleIcon.viewBox}
                    width="22"
                    height="22"
                    ml="8"
                  />
                </span>
              </div>
              <form name="order">
                <OrderButtonStyled type="submit">
                  Оформить заказ
                </OrderButtonStyled>
              </form>
            </>
          ) : (
            'В корзине ничего нет 😢'
          )}
        </CartContentWrapper>
      </Container>
    </Content>
  );
};
