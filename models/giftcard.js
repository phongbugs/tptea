'use strict';

module.exports = function (sequelize, DataTypes) {
  var GiftCard = sequelize.define('giftcard', {
    code: DataTypes.STRING,
    customerId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    expiry: DataTypes.INTEGER,
    isprinted: DataTypes.BOOLEAN
  }, {});
  GiftCard.associate = function (models) {
    // associations can be defined here
    GiftCard.belongsTo(models.Customer);
  };
  return GiftCard;
};