import { createContext } from 'react';

const ProductsContext = createContext({
  products: [],
  query: '',
});

export default ProductsContext;
