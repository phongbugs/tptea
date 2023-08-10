'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('MenuModifier', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menuId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Menus',
          key: 'id'
        }
      },
      modifierId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Modifiers',
          key: 'id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('MenuModifier');
  }
};