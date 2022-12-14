"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SubCategory.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: `sub category name is required` },
          notEmpty: { msg: `sub category name is required` },
        },
      },
    },
    {
      sequelize,
      modelName: "SubCategory",
    }
  );
  return SubCategory;
};
