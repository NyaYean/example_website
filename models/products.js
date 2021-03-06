'use strict';
module.exports = function(sequelize, DataTypes) {
  var products = sequelize.define('products', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {

    timestamps: false,

    classMethods: {
      associate: function(models) {
        products.belongsToMany(models.users, {
          through: 'users_products',
          foreignKey: 'product_id'
        })
      }
    }
  });
  return products;
};