import PropTypes from 'prop-types';

export const Parent = PropTypes.object;

export const Crumb = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  name_parameterized: PropTypes.string,
  parent: Parent,
});
