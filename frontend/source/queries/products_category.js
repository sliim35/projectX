import gql from 'graphql-tag';

export const PRODUCTS_CATEGORY_QUERY = gql`
  query ProductsCategoryQuery($category_name: String!) {
    products_category(category_name: $category_name) {
      id
      name
      name_parameterized
      products {
        id
        name
        image_path
        price
        stock
      }
      pagination {
        page
        pagesTotal
        productsTotal
      }
    }
  }
`;
