const router = require('express').Router();
const { GiftCode } = require('../database');
const { statuses } = require('../constants/GiftCodeStatuses');

router.post('/:giftcode', async (req, res) => {
  const record = await GiftCode.findOne({ where: { code: req.params.giftcode } });
  if (!record) {
    res.json({
      status: 404,
      errorMessage: 'Gift Code Not Found',
    });
    return;
  }
  if (record.status === statuses.REDEEMED) {
    res.json({
      status: 400,
      errorMessage: 'Gift Code Already Redeemed',
    });
    return;
  }
  if (record.status === statuses.INACTIVE) {
    res.json({
      status: 400,
      errorMessage: 'Gift Code Inactive',
    });
    return;
  }
  try {
    await record.update({
      status: statuses.REDEEMED,
    });
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      errorMessage: error.message,
    });
    return;
  }
  res.json({
    status: 200,
    credits: record.credits,
  });
});

module.exports = router;
