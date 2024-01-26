"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate(models) {}
  }
  Player.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      result: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Player",
    }
  );
  return Player;
};
