const express = require('express');
const morgan = require('morgan');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = 3000;

/* connect to db */
const { sequelize } = require('./database');
sequelize
  .authenticate()
  .then(() => {
    console.log('MySQL connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
    throw error;
  });

/* log requests */
const loggerType = process.env['development'] === 'true' ? 'dev' : 'common';
app.use(morgan(loggerType, {
  skip: function skip(req) {
    return req.path.startsWith('/health') || req.path.startsWith('/version')
  },
}))

/* all API endpoints */
const apiRoutes = require('./api');
app.use('/api', apiRoutes);

app.listen(PORT, () => console.log(`Example gift code app listening on port ${PORT}!`));
