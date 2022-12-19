const router = require("express").Router();
const MainCategoryControl = require("../controllers/MainCategoryController");
const SubCategoryControl = require("../controllers/SubCategoryController");
const MenuControl = require("../controllers/MenuController");

router.get("/categories/main", MainCategoryControl.read);
router.get("/categories/sub", SubCategoryControl.read);
router.get("/menus", MenuControl.read);

router.get("/categories/main/:id", MainCategoryControl.detail);
router.get("/categories/sub/:id", SubCategoryControl.detail);
router.get("/menus/:id", MenuControl.detail);



module.exports = router;
