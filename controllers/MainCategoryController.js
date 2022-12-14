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
}

module.exports = MainCategoryControl;
