const router = require('express').Router();

router.post('/:giftcode', (req, res) => {
  res.json({
    status: '?',
    giftcode: req.params.giftcode,
  })
});

module.exports = router;
