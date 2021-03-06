'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {

    timestamps: false,

    classMethods: {
      associate: function(models) {
        users.belongsToMany(models.products, {
          through: 'users_products',
          foreignKey: "user_id"
        })
      }
    }
  });
  return users;
};