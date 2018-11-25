DROP TABLE listings;

CREATE TABLE IF NOT EXISTS listings (
  id INT PRIMARY KEY,
  max_guests INT,
  price_per_night INT,
  review_count INT,
  rating INT
);

COPY listings(id, max_guests, price_per_night, review_count, rating) FROM './text.csv';