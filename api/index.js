const router = require('express').Router();

const giftcode = require('./giftcode');

router.use('/giftcode', giftcode);

const redeem = require('./redeem');

router.use('/redeem', redeem);

module.exports = router;
