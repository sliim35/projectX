import gql from 'graphql-tag';

export const PRODUCTS_CATEGORY_QUERY = gql`
  query ProductsCategoryQuery($category_name: String!, $page: Int) {
    products_category(category_name: $category_name, page: $page) {
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
      parent {
        name
        id
        name_parameterized
      }
      pagination {
        page
        pagesTotal
        productsTotal
      }
    }
  }
`;
