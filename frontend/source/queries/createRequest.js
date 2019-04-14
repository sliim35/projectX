import gql from 'graphql-tag';

export const CREATE_REQUEST_MUTATION = gql`
  mutation CreateRequest($products: [createRequestInput]!) {
    create_request(products: $products) {
      msg
    }
  }
`;
