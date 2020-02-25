const dotenv = require('dotenv');
dotenv.config();

const { GiftCode } = require('./index');
const devSeed = require('./devSeed');

async function migrate() {
  await GiftCode.sync();
}

async function seed() {
  await GiftCode.bulkCreate(devSeed, { ignoreDuplicates: true });
}

async function devSetup() {
  await migrate();
  await seed();
  process.exit(0);
}

devSetup();
