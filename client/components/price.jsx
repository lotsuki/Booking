/* eslint camelcase: "off" */

import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price_per_night }) => (
  <div className="price">
    <div className="rate">
      $
      {price_per_night}
      <span className="per-night"> per night</span>
    </div>
  </div>
);

Price.propTypes = {
  price_per_night: PropTypes.number,
};

Price.defaultProps = {
  price_per_night: 0,
};

export default Price;
