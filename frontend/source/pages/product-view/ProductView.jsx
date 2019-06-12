import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Query } from 'react-apollo';

import * as actionCreators from '../../store/actions';
import * as queries from '../../queries/product';
import rubleIcon from '../../static/icons/ruble.svg';

import { Icon } from '../../components/icon/Icon';
import { Container } from '../../components/container/Container';
import { Content } from '../../components/content/Content';
import { LeadTitle } from '../../components/lead-title/LeadTitle';

const TEXENERGO_CDN = 'https://cdn.texenergo.com';

const ProductViewStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 1rem;

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    max-height: 400px;
    height: auto;
    overflow: hidden;
    margin-right: auto;
    padding: 32px;
  }

  .info {
    flex-grow: 1;
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

  .manufacturer {
    margin-bottom: 1rem;
  }

  .actions {
    display: flex;
    flex-grow: 1;
    width: 100%;
    margin-top: 40px;
  }

  .quantity-form {
    width: 100%;
  }
`;

const BuyButtonStyled = styled.button`
  color: ${(props) => props.theme.titleColor};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 50%;
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

  &:hover {
    background-color: ${(props) =>
      props.disabled ? props.theme.disabledColor : props.theme.activeColor};
  }

  &:active {
    opacity: 0.5;
    transition-duration: 1ms;
  }
`;

const InputQuantityStyled = styled.input`
  width: 50%;
  height: 48px;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-right: 1rem;

  &:focus {
    border: 1px solid ${(props) => props.theme.mainColor};
  }
`;

const ProductView = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [currentProduct, setCurrentProduct] = useState({});
  const { product_id } = props.match.params;
  const { actions, cart } = props;

  function isBuyButtonDisabled() {
    if (cart.length > 0) {
      return cart.some((product) => product.id === currentProduct.id);
    }
  }

  return (
    <Query query={queries.PRODUCT_QUERY} variables={{ product_id }}>
      {({ error, data: { product }, loading }) => {
        if (error) return `Error! ${error.message}`;
        if (loading) return null;
        if (product) setCurrentProduct(product);

        return (
          <Content>
            <LeadTitle>{product.name}</LeadTitle>
            <ProductViewStyled>
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
              <div className="info">
                <div className="manufacturer">
                  {`Производитель: ${product.manufacturer.name}`}
                </div>
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
              <form
                className="quantity-form"
                name="quantity"
                onSubmit={(e) => {
                  e.preventDefault();
                  const quantityObj = {
                    quantity,
                  };
                  const payload = Object.assign(quantityObj, product);

                  actions.addProductInCart(payload);
                }}
              >
                <div className="actions">
                  <InputQuantityStyled
                    type="number"
                    placeholder="Например, 20 шт."
                    onChange={(e) => setQuantity(e.target.value)}
                    disabled={isBuyButtonDisabled()}
                  />
                  <BuyButtonStyled
                    type="submit"
                    disabled={isBuyButtonDisabled()}
                  >
                    {isBuyButtonDisabled() ? 'Товар в корзине' : 'В корзину'}
                  </BuyButtonStyled>
                </div>
              </form>
            </ProductViewStyled>
          </Content>
        );
      }}
    </Query>
  );
};

const ProductViewConnected = connect(
  ({ cart }) => ({
    cart,
  }),
  (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(ProductView);

ProductView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      product_id: PropTypes.string.isRequired,
    }),
  }),
};

export { ProductViewConnected as ProductView };
