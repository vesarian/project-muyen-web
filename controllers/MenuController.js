const { Menu } = require("../models/");

class MenuControl {
  static async read(req, res, next) {
    try {
      const menu = await Menu.findAll()
      res.status(200).json(menu)
    } catch (err) {
      console.log(err);
      res.status(400).json(err)
    }
  }
}

module.exports = MenuControl;
