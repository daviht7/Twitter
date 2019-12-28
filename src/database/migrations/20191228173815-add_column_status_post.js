'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("posts", "status", {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false
    });
    
  },

  down: (queryInterface) => {
      return queryInterface.dropTable('post');
  }
};
