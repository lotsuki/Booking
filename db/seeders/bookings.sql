DROP TABLE bookings;
DROP TABLE listings;

CREATE TABLE IF NOT EXISTS listings (
  id SERIAL PRIMARY KEY,
  max_guests INTEGER NOT NULL,
  price_per_night NUMERIC NOT NULL,
  review_count INTEGER,
  rating INTEGER
);

CREATE TABLE IF NOT EXISTS bookings (
  id,
  listing_id INTEGER REFERENCES listings (id),
  customer_name VARCHAR NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_days INTEGER,
  total_price NUMERIC NOT NULL,
  booking_date DATE NOT NULL
  PRIMARY KEY(id(listing_id, start_date, end_date))
) WITH CLUSTERING ORDER BY (start_date ASC)





