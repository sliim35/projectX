import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { client } from '../../libs/graphqlClient';
import * as actionsCreators from '../../store/actions';
import * as queries from '../../queries';
import searchIcon from '../../static/icons/search.svg';
import spinnerIcon from '../../static/icons/spinner.svg';
import timesIcon from '../../static/icons/times.svg';

import { Icon } from '../../components/icon/Icon';
import { ButtonIcon } from '../../components/button-icon/ButtonIcon';

import { NavSearchStyled } from './styles/NavSearchStyled';

const NavSearch = (props) => {
  const [value, setValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { setSearching, actions } = props;

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
      actions.getProducts(products);
    }
  };

  useEffect(() => {
    actions.setSearchQuery(value);
    if (value) {
      getProducts();
    }
  }, [value]);

  return (
    <NavSearchStyled border={value}>
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
      {value && (
        <ButtonIcon
          onClick={() => setValue('')}
          glyph={timesIcon.id}
          viewBox={timesIcon.viewBox}
          right="0"
          width="16"
          height="16"
        />
      )}
    </NavSearchStyled>
  );
};

const NavSearchConnected = connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(actionsCreators, dispatch),
  })
)(NavSearch);

NavSearch.propTypes = {
  setSearching: PropTypes.func,
};

NavSearch.defaultProps = {
  setSearching: () => null,
};

export { NavSearchConnected as NavSearch };
