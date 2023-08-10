'use strict';

module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    balance: DataTypes.FLOAT,
    points: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  Customer.associate = function (models) {
    // associations can be defined here
    Customer.hasMany(models.Order, {
      foreignKey: 'customerId'
    });
    Customer.hasMany(models.GiftCard, {
      foreignKey: 'customerId'
    });
  };
  return Customer;
};