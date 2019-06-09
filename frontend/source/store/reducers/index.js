import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { queryReducer } from './queryReducer';
import { menuReducer } from './menuReducer';

export default {
  products: productsReducer,
  cart: cartReducer,
  query: queryReducer,
  menu: menuReducer,
};
