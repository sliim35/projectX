import gql from 'graphql-tag';

export const PRODUCTS_CATEGORY_QUERY = gql`
  query ProductsCategoryQuery($category_name: String!) {
    products_category(category_name: $category_name) {
      products {
        id
        name
        image_path
        price
        stock
      }
    }
  }
`;
