const { Menu, MainCategory, SubCategory } = require("../models/");

class MenuControl {
  // static async read(req, res, next) {
  //   try {
  //     const menu = await Menu.findAll({
  //       include: [
  //         {
  //           model: MainCategory,
  //           attributes: ["name"],
  //         },
  //         {
  //           model: SubCategory,
  //           attributes: ["name"],
  //         },
  //       ],
  //     });

  //     if (!menu) {
  //       throw { "name": "SequelizeDatabaseError" }
  //     }
  //     res.status(200).json(menu);
  //   } catch (err) {
  //     next(err)
  //   }
  // }

  static async pagination(req, res, next) {
    // try {
    //   const { page, MainCategoryId } = req.query;

    //   let filter = { status: "Available" };
    //   if (MainCategoryId) filter.MainCategoryId = MainCategoryId;

    //   let limit = 9;
    //   let pagination = page ? page * limit : 0;

    //   const menu = await Menu.findAndCountAll({
    //     limit,
    //     offset: pagination,
    //     where: filter,
    //     include: [
    //       {
    //         model: MainCategory,
    //         attributes: ["name"],
    //       },
    //       {
    //         model: SubCategory,
    //         attributes: ["name"],
    //       },
    //     ],
    //   });
    //   res.status(200).json(menu);
    // } catch (err) {
    //   console.log(err);
    //   next(err);
    // }

    try {
      const { page, filter } = req.query;
      let limit = 9;
      let pagination = page ? page * limit : 0;
      let options = {
        limit,
        offset: pagination,
        where: {},
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
      };

      if (filter) options.where.MainCategoryId = filter;

      const menu = await Menu.findAndCountAll(options);
      res.status(200).json(menu);
    } catch (err) {
      next(err);
    }
  }

  static async detail(req, res, next) {
    try {
      const { id } = req.params;
      const menu = await Menu.findByPk(id);
      if (!menu) {
        throw { name: "SequelizeDatabaseError" };
      }
      res.status(200).json(menu);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MenuControl;
