const express = require('express');
const app = express();
const PORT = 3000;

app.post('/api/redeem/:giftcode', (req, res) => {
  res.json({
    status: '?',
    giftcode: req.params.giftcode,
  })
})

app.post('/api/giftcode/generate', (req, res) => {
  res.json({
    status: '?',
    codes: [],
  })
})

app.listen(PORT, () => console.log(`Example gift code app listening on port ${PORT}!`));
