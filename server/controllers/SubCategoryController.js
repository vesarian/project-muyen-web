const { SubCategory, Menu } = require("../models/");

class SubCategoryControl {
  static async read(req, res, next) {
    try {
      const sub = await SubCategory.findAll()
      if (!sub) {
        throw { "name": "SequelizeDatabaseError" }
      }
      res.status(200).json(sub)
    } catch (err) {
      next(err)
    }
  }

  static async detail(req, res, next) {
    try {
      const { id } = req.params;
      const getMenuSub = await Menu.findAll({
        where: {
          "SubCategoryId": id
        }
      })

      if (!getMenuSub) {
        throw { "name": "SequelizeDatabaseError" }
      }

      res.status(200).json(getMenuSub)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = SubCategoryControl;
