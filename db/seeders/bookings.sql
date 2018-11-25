-- DROP TABLE bookings;
-- DROP TABLE listings;

-- CREATE TABLE IF NOT EXISTS listings (
--   id INT PRIMARY KEY,
--   max_guests INT,
--   price_per_night DECIMAL,
--   review_count INT,
--   rating INT
-- );

-- CREATE TABLE IF NOT EXISTS bookings (
--   id SERIAL PRIMARY KEY,
--   listing_id INTEGER REFERENCES listings (id),
--   customer_name VARCHAR NOT NULL,
--   start_date DATE NOT NULL,
--   end_date DATE NOT NULL,
--   total_days INTEGER,
--   total_price NUMERIC NOT NULL,
--   booking_date DATE NOT NULL
-- );










