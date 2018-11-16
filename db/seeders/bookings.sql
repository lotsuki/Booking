DROP TABLE bookings;
DROP TABLE listings;

CREATE TABLE IF NOT EXISTS listings (
  id SERIAL PRIMARY KEY,
  host_id INTEGER,
  max_guests INTEGER,
  price_per_night NUMERIC,
  review_count INTEGER,
  rating INTEGER
);

CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  listing_id INTEGER REFERENCES listings (id),
  customer_name VARCHAR NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_days INTEGER,
  total_price NUMERIC NOT NULL,
  booking_date DATE NOT NULL
);


\copy listings from './db/seeders/text.csv' with (format csv);