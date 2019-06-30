import PropTypes from 'prop-types';

export const MenuCategoryItem = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  name_parameterized: PropTypes.string,
});

export const MenuCategory = PropTypes.arrayOf(MenuCategoryItem);
