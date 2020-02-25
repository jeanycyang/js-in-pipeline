const express = require('express');
const apiRoutes = require('./api');

const app = express();
const PORT = 3000;

/* all API endpoints */
app.use('/api', apiRoutes);

app.listen(PORT, () => console.log(`Example gift code app listening on port ${PORT}!`));
