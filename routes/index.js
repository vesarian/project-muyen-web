const router = require("express").Router();
const CategoryControl = require("../controllers/CategoryController");
const MenuControl = require("../controllers/MenuController");

router.get("categories", CategoryControl.read);
router.get("/menus", MenuControl.read);

module.exports = router;
