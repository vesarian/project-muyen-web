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

  static async detail(req, res, next) {
    try {
      const { id } = req.params;
      const menu = await Menu.findByPk(id);
      res.status(200).json(menu);
      if (!id) throw { name: "notFound" };
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}

module.exports = MenuControl;
