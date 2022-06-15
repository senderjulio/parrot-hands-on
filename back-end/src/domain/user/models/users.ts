const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Users = db.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      apartment: {
        type: DataTypes.INTEGER,
      },
      password: {
        type: DataTypes.STRING(300),
      },    
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },      
    },
    {
      tableName: "users",
    }
  );