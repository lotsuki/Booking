/* eslint camelcase: "off" */

import React from 'react';
import PropTypes from 'prop-types';

const Subtotal = ({
  cleaning_fee,
  service_fee,
  price_per_night,
  total,
  daysBooked,
}) => (
  <div className="confirm-booking">
    <div className="fee">
      $
      {price_per_night}
      {' '}
      x
      {' '}
      {daysBooked}
      {' '}
      nights
      {' '}
      <span className="cost">
        {' '}
        $
        {price_per_night * daysBooked}
      </span>
    </div>
    <div className="fee-line-break" />
    <div className="fee">
      Cleaning fee
      <span className="cost">
        {' '}
        $
        {cleaning_fee}
      </span>
    </div>
    <div className="fee-line-break" />
    <div className="fee">
      Service fee
      <span className="cost">
        {' '}
        $
        {service_fee}
      </span>
    </div>
    <div className="fee-line-break" />
    <div className="total">
      Total
      <span className="cost">
        {' '}
        $
        {total}
      </span>
    </div>
  </div>
);

Subtotal.propTypes = {
  price_per_night: PropTypes.number,
  cleaning_fee: PropTypes.number,
  service_fee: PropTypes.number,
  total: PropTypes.number,
  daysBooked: PropTypes.number,
};

Subtotal.defaultProps = {
  total: 0,
  price_per_night: 0,
  cleaning_fee: 0,
  service_fee: 0,
  daysBooked: 0,
};

export default Subtotal;
