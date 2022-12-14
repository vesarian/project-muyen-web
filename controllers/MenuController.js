const { Menu, MainCategory, SubCategory } = require("../models/");

class MenuControl {
  static async read(req, res, next) {
    try {
      const menu = await Menu.findAll({
        include: [
          {
            model: MainCategory,
            attributes: ["name"],
          },
          {
            model: SubCategory,
            attributes: ["name"],
          },
        ],
      });
      res.status(200).json(menu);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}

module.exports = MenuControl;
