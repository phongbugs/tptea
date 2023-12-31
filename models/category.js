'use strict';

module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Menu, {
      foreignKey: 'categoryId'
    });
  };
  return Category;
};