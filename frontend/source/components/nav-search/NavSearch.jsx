import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import ProductsContext from '../../store';
import { client } from '../../../tools/graphqlClient';
import { SEARCH_QUERY, GET_PRODUCTS } from '../../store/constants';
import * as queries from '../../queries';
import searchIcon from '../../static/icons/search.svg';
import spinnerIcon from '../../static/icons/spinner.svg';

import { Icon } from '../../components/icon/Icon';

import { NavSearchStyled } from './styles/NavSearchStyled';

export const NavSearch = (props) => {
  const [value, setValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { dispatch } = useContext(ProductsContext);
  const { setSearching } = props;

  const getProducts = async () => {
    setLoading(true);
    const { data } = await client.query({
      query: queries.PRODUCTS_QUERY,
      variables: {
        query: value || undefined,
      },
    });

    if (data) {
      const { products } = data;
      setLoading(false);
      dispatch({ type: GET_PRODUCTS, payload: products });
    }
  };

  useEffect(() => {
    dispatch({ type: SEARCH_QUERY, payload: value });
    if (value) {
      getProducts();
    }
  }, [value]);

  return (
    <NavSearchStyled>
      {isLoading ? (
        <Icon
          glyph={spinnerIcon.id}
          viewBox={spinnerIcon.viewBox}
          width="16"
          height="16"
          top="36"
          isSpinner
        />
      ) : (
        <Icon
          glyph={searchIcon.id}
          viewBox={searchIcon.viewBox}
          width="16"
          height="16"
        />
      )}
      <label className="label visually-hidden" htmlFor="search">
        Поиск по артикулу или названию
      </label>
      <input
        id="search"
        type="text"
        className="search-input"
        placeholder="Поиск по артикулу или названию"
        autoComplete="off"
        onClick={() => setSearching(true)}
        onBlur={() => setSearching(false)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </NavSearchStyled>
  );
};

NavSearch.propTypes = {
  setSearching: PropTypes.func,
};

NavSearch.defaultProps = {
  setSearching: () => null,
};
