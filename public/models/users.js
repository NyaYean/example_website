'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        users.hasMany(models.products, {foreignKey: 'product_id'});
      }
    }
  });
  return users;
};