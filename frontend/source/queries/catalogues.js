import gql from 'graphql-tag';

export const CATALOGUES_QUERY = gql`
  query CataloguesQuery {
    categories {
      id
      name
      name_parameterized
      children {
        id
        name
        name_parameterized
      }
    }
  }
`;
