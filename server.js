const app = require('express')();

app.get('/', (req, res) => res.send('I AM ACTIVE '));

module.exports = () => {
  app.listen(3000);
}