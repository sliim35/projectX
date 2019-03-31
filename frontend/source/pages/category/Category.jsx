import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import { Content } from '../../components/content/Content';
import { Loader } from '../../components/loader/Loader';
import { ProductsGrid } from '../../components/products-grid/ProductsGrid';
import { Products } from '../../components/products/Products';
import { LeadTitle } from '../../components/lead-title/LeadTitle';

import * as queries from '../../queries';

export const Category = (props) => {
  const { category_name } = props.match.params;

  return (
    <Content>
      <Query
        query={queries.PRODUCTS_CATEGORY_QUERY}
        variables={{ category_name, page: 1 }}
      >
        {({ loading, error, data, fetchMore }) => {
          if (loading) return <Loader />;
          if (error) return `Error! ${error.message}`;

          return (
            <>
              <LeadTitle>{data.products_category.name}</LeadTitle>
              <ProductsGrid>
                <Products
                  pagination={data.products_category.pagination}
                  onLoadMore={(newPage) => {
                    fetchMore({
                      variables: {
                        category_name,
                        page: newPage,
                      },
                      updateQuery: (previousResult, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return previousResult;
                        return {
                          products_category: {
                            ...fetchMoreResult.products_category,
                            products: [
                              ...previousResult.products_category.products,
                              ...fetchMoreResult.products_category.products,
                            ],
                          },
                        };
                      },
                    });
                  }}
                  data={data}
                />
              </ProductsGrid>
            </>
          );
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
