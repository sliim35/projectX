import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SearchResultListStyled = styled.ul`
  max-height: 500px;
  overflow-y: scroll;
  padding: 8px 16px;

  li {
    color: ${(props) => props.theme.textColor};
    padding: 8px;
    font-weight: 300;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      border-top: 1px solid ${(props) => props.theme.borderColor};
      border-bottom: 1px solid ${(props) => props.theme.borderColor};
    }
  }

  .highlight {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.titleColor};
    border-radius: 2px;
  }
`;

const SearchResultList = ({ products, query }) => {
  const regexp = new RegExp(query, 'gi');

  return (
    <SearchResultListStyled>
      {products.length > 0 ? (
        products.map((product) => {
          const name = product.name
            .replace(regexp, `<span class='highlight'>${query}</span>`)
            .toLowerCase();

          return (
            <Link key={product.id} to={`/products/${product.id}`}>
              <li
                dangerouslySetInnerHTML={{
                  __html: ` ${name}`,
                }}
              />
            </Link>
          );
        })
      ) : (
        <li>🤷‍ Ничего не найдено</li>
      )}
    </SearchResultListStyled>
  );
};

const SearchResultListConnected = connect(({ products, query }) => ({
  products,
  query,
}))(SearchResultList);
export { SearchResultListConnected as SearchResultList };
