const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Game }) {
      this.hasMany(Game, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      login: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
