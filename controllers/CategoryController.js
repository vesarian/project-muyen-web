const { Category } = require('../models/');

class CategoryControl {
    static async read(req, res, next) {
        try {
            const category = await Category.findAll()
            res.status(200).json(category)
        } catch (err) {
            console.log(err);
            res.status(400).json(err)
        }
    }
}

module.exports = CategoryControl