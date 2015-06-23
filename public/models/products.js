'use strict';
module.exports = function(sequelize, DataTypes) {
  var products = sequelize.define('products', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    product_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        products.belongsTo(models.artists, {foreignKey: 'product_id'})
      }
    }
  });
  return products;
};