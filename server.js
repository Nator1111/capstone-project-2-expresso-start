const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const cors = require('cors');
const apiRouter = require('./api/api');


const PORT = process.env.PORT || 4000; 

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', apiRouter);

app.use(errorhandler());

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
  });
  
module.exports = app;