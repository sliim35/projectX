import PropTypes from 'prop-types';

export const Match = PropTypes.shape({
  isExact: PropTypes.bool,
  params: PropTypes.object,
  path: PropTypes.string,
  url: PropTypes.string,
});
