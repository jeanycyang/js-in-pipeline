const router = require('express').Router();

router.post('/generate', (req, res) => {
  res.json({
    status: '?',
    codes: [],
  });
});

module.exports = router;
