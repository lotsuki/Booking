import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import React from 'react';
import { DateRangePicker, ICON_BEFORE_POSITION } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';

const Calendar = ({
  startDate,
  startDateId,
  endDate,
  endDateId,
  handleDatesChange,
  handleFocusChange,
  focusedInputData,
}) => {
  const onFocusChange = (val) => {
    handleFocusChange(val);
  };

  const onDatesChange = (val) => {
    handleDatesChange(val);
  };

  return (
    <div className="calendar">
      <div className="label">Dates</div>
      <DateRangePicker
        startDate={startDate}
        startDateId={startDateId || 'start-date'}
        endDate={endDate}
        endDateId={endDateId || 'end-date'}
        onDatesChange={val => onDatesChange(val)}
        focusedInput={focusedInputData}
        onFocusChange={(focusedInput) => { onFocusChange(focusedInput); }}
        inputIconPosition={ICON_BEFORE_POSITION}
        showDefaultInputIcon
        startDatePlaceholderText="Check in"
        endDatePlaceholderText="Check out"
      />
    </div>
  );
};

Calendar.propTypes = {
  startDate: momentPropTypes.momentObj,
  startDateId: PropTypes.string.isRequired,
  endDate: momentPropTypes.momentObj,
  endDateId: PropTypes.string.isRequired,
  handleDatesChange: PropTypes.func.isRequired,
  focusedInputData: PropTypes.oneOf([null, 'startDate', 'endDate']),
  handleFocusChange: PropTypes.func.isRequired,
};

Calendar.defaultProps = {
  startDate: null,
  endDate: null,
  focusedInputData: null,
};

export default Calendar;
