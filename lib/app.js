const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// app.use('/api/v1/RESOURCE', require('./routes/resource'));

app.get('/', (req, res) => {
  res.send('Working!');
});

app.get('/home', (req, res) => {
  res.send('home');
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
