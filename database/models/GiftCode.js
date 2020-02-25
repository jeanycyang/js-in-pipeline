const { statusesArray } = require('../../constants/GiftCodeStatuses');

module.exports = (sequelize, Sequelize) => {
  const GiftCode = sequelize.define("GiftCode", {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: Sequelize.ENUM,
      values: statusesArray,
      allowNull: false,
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    credits: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  }, {
    indexes: [
        {
            unique: true,
            fields: ['code']
        }
    ]
  });
  return GiftCode;
};
