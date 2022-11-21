const express = require("express");
const router = express.Router();
const {
  getCakes,
  postCakes,
  updateCakes,
  deleteCakes,
} = require("../controller/cakesController");
router.get("/", getCakes);
router.post("/", postCakes);
router.put("/:id", updateCakes);
router.delete("/:id", deleteCakes);

module.exports = router;
