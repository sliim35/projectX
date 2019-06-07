import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as helpers from '../../helpers';
import * as actionCreators from '../../store/actions';

import trashIcon from '../../static/icons/trash.svg';
import rubleIcon from '../../static/icons/ruble.svg';

import { Icon } from '../../components/icon/Icon';
import { Total } from '../../components/total/Total';

import { ProductsListStyled } from './ProductsListStyled';

const TEXENERGO_CDN = 'https://cdn.texenergo.com';

function ProductsList({ actions, cart }) {
  return (
    <ProductsListStyled>
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
            {helpers.capitalizeFirstLetter(product.name.toLowerCase())}
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
            <button
              className="actions"
              onClick={() => actions.removeProductFromCart(product.id)}
            >
              <Icon
                position="unset"
                glyph={trashIcon.id}
                viewBox={trashIcon.viewBox}
                width="16"
                height="16"
                ml="4"
                top="0"
                coordY="0"
              />
            </button>
          </div>
        </li>
      ))}
      <Total />
    </ProductsListStyled>
  );
}

const ProductsListConnected = connect(
  ({ cart }) => ({ cart }),
  (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(ProductsList);

export { ProductsListConnected as ProductsList };
