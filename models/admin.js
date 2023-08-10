'use strict';

module.exports = function (sequelize, DataTypes) {
  var Admin = sequelize.define('Admin', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    roles: DataTypes.STRING
  }, {});
  Admin.associate = function (models) {
    // associations can be defined here
  };
  return Admin;
};