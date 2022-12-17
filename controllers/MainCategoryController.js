const { MainCategory, Menu } = require("../models");

class MainCategoryControl {
  static async read(req, res, next) {
    try {
      const main = await MainCategory.findAll();
      if (!main) {
        throw { "name": "SequelizeDatabaseError" }
      }
      res.status(200).json(main);
    } catch (err) {
      next(err)
    }
  }

  static async detail(req, res, next) {
    try {
      const { id } = req.params;
      const getMenus = await Menu.findAll({
        where: {
          "MainCategoryId": id
        }
      })

      if (!getMenus) {
        throw { "name": "SequelizeDatabaseError" }
      }

      res.status(200).json(getMenus);
    } catch (err) {
      next(err)
    }
  }
}

module.exports = MainCategoryControl;
