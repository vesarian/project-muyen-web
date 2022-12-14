"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsTo(models.MainCategory)
      Menu.belongsTo(models.SubCategory)
    }
  }
  Menu.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: `menu name is required` },
          notEmpty: { msg: `menu name is required` },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: `price is required` },
          notEmpty: { msg: `price is required` },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: `imgUrl is required` },
          notEmpty: { msg: `imgUrl is required` },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: `description is required` },
          notEmpty: { msg: `description is required` },
        },
      },
      status: DataTypes.STRING,
      MainCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: `main categoryid is required` },
          notEmpty: { msg: `main categoryid is required` },
        },
        references: {
          model: "MainCategories",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      SubCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: `sub categoryid is required` },
          notEmpty: { msg: `sub categoryid is required` },
        },
        references: {
          model: "SubCategories",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
    },
    {
      sequelize,
      modelName: "Menu",
    }
  );
  return Menu;
};
