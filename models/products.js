'use strict';
module.exports = function(sequelize, DataTypes) {
  var products = sequelize.define('products', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return products;
};