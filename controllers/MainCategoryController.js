const { MainCategory } = require("../models");

class MainCategoryControl {
  static async read(req, res, next) {
    try {
      const main = await MainCategory.findAll();
      res.status(200).json(main);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }

  static async detail(req, res, next) {
    try {
      const { id } = req.params;
      const main = await MainCategory.findByPk(id);
      if(!id) throw {name: "notFound"}
      res.status(200).json(main);
    } catch (err) {
      console.log(err);
      // res.status(400).json(err)
      next(err)
    }
  }
}

module.exports = MainCategoryControl;
