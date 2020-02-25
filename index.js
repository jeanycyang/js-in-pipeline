const express = require('express');
const morgan = require('morgan');

const apiRoutes = require('./api');

const app = express();
const PORT = 3000;
const loggerType = process.env['development'] === 'true' ? 'dev' : 'common';

/* log requests */
app.use(morgan(loggerType, {
  skip: function skip(req) {
    return req.path.startsWith('/health') || req.path.startsWith('/version')
  },
}))

/* all API endpoints */
app.use('/api', apiRoutes);

app.listen(PORT, () => console.log(`Example gift code app listening on port ${PORT}!`));
