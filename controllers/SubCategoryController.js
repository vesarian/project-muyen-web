const { SubCategory } = require("../models/");

class SubCategoryControl {
  static async read(req, res, next) {
    try {
        const sub = await SubCategory.findAll()
        res.status(200).json(sub)
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}

module.exports = SubCategoryControl;
