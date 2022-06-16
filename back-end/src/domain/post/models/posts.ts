const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Posts = db.define(
    "Posts",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      texto: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
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
      tableName: "posts",
    }
  );