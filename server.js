const express = require('express');
const morgan =  require('morgan');

require('dotenv').config();

const app = express();
app.use(morgan);
app.get('/', (req, res) => {
  res.send('The server is running');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
    console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
  });