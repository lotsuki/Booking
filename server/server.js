const app = require('./api');

const port = process.env.PORT || 9042;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
