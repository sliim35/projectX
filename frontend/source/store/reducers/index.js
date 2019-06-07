import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { queryReducer } from './queryReducer';

export default {
  products: productsReducer,
  cart: cartReducer,
  query: queryReducer,
};
