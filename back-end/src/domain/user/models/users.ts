const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Psicologos = db.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      apartment: {
        type: DataTypes.INTEGER,
      },
      senha: {
        type: DataTypes.STRING(300),
      },
      apresentacao: {
        type: DataTypes.STRING,
      },    
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },      
    },
    {
      tableName: "psicologos",
    }
  );