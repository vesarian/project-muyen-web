"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Menus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      imgUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      status: {
        type: Sequelize.STRING,
      },
      MainCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
        references: {
          model: "MainCategories",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      SubCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
        references: {
          model: "SubCategories",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Menus");
  },
};
