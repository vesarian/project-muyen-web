const router = require("express").Router();
const MainCategoryControl = require("../controllers/MainCategoryController");
const SubCategoryControl = require("../controllers/SubCategoryController");
const MenuControl = require("../controllers/MenuController");

router.get("/categories/main", MainCategoryControl.read);
router.get("/categories/sub", SubCategoryControl.read);
router.get("/menus", MenuControl.read);

module.exports = router;
