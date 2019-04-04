import gql from 'graphql-tag';

export const PRODUCTS_QUERY = gql`
  query ProductsQuery($query: String) {
    products(query: $query) {
      id
      name
      image_path
      price
      stock
    }
  }
`;
