import gql from 'graphql-tag';

export const PRODUCT_QUERY = gql`
  query ProductQuery($product_id: String!) {
    product(product_id: $product_id) {
      id
      article
      name
      name_parameterized
      image_path
      manufacturer_id
      manufacturer {
        name
      }
      price
      stock
    }
  }
`;
