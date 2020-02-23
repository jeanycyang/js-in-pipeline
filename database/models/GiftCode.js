module.exports = (sequelize, Sequelize) => {
  const GiftCode = sequelize.define("GiftCode", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: Sequelize.ENUM,
      values: ['active', 'inactive', 'redeemed'],
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
  });
  return GiftCode;
};
