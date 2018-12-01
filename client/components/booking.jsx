
import React from 'react';
import fetch from 'node-fetch';
import moment from 'moment';
import faker from 'faker';

import '../../public/style.css';
import Calendar from './calendar';
import Guest from './guests';
import Book from './book';
import Reviews from './reviews';
import Price from './price';
import Subtotal from './subtotal';


class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      guestCount: 1,
      daysBooked: 0,
      startDate: null,
      endDate: null,
      focusedInput: null,
      total: 0,
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.handleGuestCountChange = this.handleGuestCountChange.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
  }

  componentDidMount() {

   fetch(`/rooms/${this.chooseRandom(1, 1000)}`)
      .then(res => res.json())
      .then((listing) => { this.setState(listing); })
      .catch((err) => { console.log('Could not get data', err); });

  }

  chooseRandom(min, max) {
    this.rand = Math.floor(Math.random() * (max - min + 1) + min);
    return this.rand;
  }

  handleGuestCountChange(newCount) {
    const {
      price_per_night,
      daysBooked,
      cleaning_fee,
      service_fee,
    } = this.state;

    this.setState({
      guestCount: newCount,
      total: ((price_per_night * daysBooked) + cleaning_fee + service_fee) * newCount,
    });
  }

  handleDatesChange(val) {
    const {
      price_per_night,
      cleaning_fee,
      service_fee,
      guestCount,
    } = this.state;
    const { startDate, endDate } = val;
    var days = moment(endDate).diff(startDate, 'days');
    var cleanFee = Math.floor(price_per_night * 0.5);
    var serviceFee = Math.floor(price_per_night * 0.3);

    this.setState({
      startDate,
      endDate,
      daysBooked: days || 1,
      total: ((price_per_night * days) + cleaning_fee + service_fee) * guestCount,
      cleaning_fee: cleanFee,
      service_fee: serviceFee
    });
  }

  handleFocusChange(val) {
    this.setState({
      focusedInput: val,
    });
  }

  handleOnSubmit(e) {

    e.preventDefault();
    const {
      id,
      startDate,
      endDate,
      total,
      daysBooked
    } = this.state;


    this.booking = {
      listing_id: id,
      customer_name: faker.name.findName(),
      start_date: moment(startDate).format('YYYY-MM-DD'),
      end_date: moment(endDate).format('YYYY-MM-DD'),
      total_days: daysBooked,
      total_price: total,
      booking_date: moment().format('YYYY-MM-DD')
    };

    fetch('/booking', {
      method: 'POST',
      body: JSON.stringify(this.booking),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => { console.log('Booking was successful!'); })
      .catch((err) => { console.log('Could not post data', err) });
  }

  render() {
    const {
      review_count,
      max_guests,
      guestCount,
      startDate,
      endDate,
      focusedInput,
      total,
      rating,
      price_per_night,
      daysBooked,
    } = this.state;


    return (
      <div className="container">
        <div className="price-review">
          <Price price_per_night={price_per_night} />
          <Reviews reviews={review_count} rating={rating} />
        </div>
        <Calendar
          focusedInputData={focusedInput}
          startDate={startDate}
          startDateId="start-date"
          endDate={endDate}
          endDateId="end-date"
          handleDatesChange={this.handleDatesChange}
          handleFocusChange={this.handleFocusChange}
        />
        <Guest
          maxGuests={max_guests}
          guestCount={guestCount}
          handleGuestCountChange={this.handleGuestCountChange}
        />
        {total > 0 && daysBooked > 0 ? <Subtotal {...this.state} /> : null}
        <Book total={total} handleOnSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}

export default Booking;
