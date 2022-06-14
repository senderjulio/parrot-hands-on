const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Posts = db.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      texto: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users'            
          },
          key: 'id'
        },
        allowNull: false
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