import React from 'react';

import { NavSearchStyled } from './styles/NavSearchStyled';

export const NavSearch = () => {
  return (
    <NavSearchStyled>
      <input
        id="search"
        type="text"
        className="search-input"
        placeholder="Поиск по артикулу или названию"
        autoComplete="off"
      />
      <label className="label visually-hidden" htmlFor="search">
        Поиск по артикулу или названию
      </label>
    </NavSearchStyled>
  );
};
