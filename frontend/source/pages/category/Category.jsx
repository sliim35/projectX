import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import { Content } from '../../components/content/Content';

import * as queries from '../../queries';

export const Category = (props) => {
  const { category_name } = props.match.params;

  return (
    <Content>
      <Query
        query={queries.PRODUCTS_CATEGORY_QUERY}
        variables={{ category_name }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          console.log(data);
          return <div>Hello Category Page</div>;
        }}
      </Query>
    </Content>
  );
};

Category.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category_name: PropTypes.string.isRequired,
    }),
  }),
};
