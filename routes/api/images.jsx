const router = require("express").Router();
const imageController = require("../../controllers/imageController");

// Matches with "/api/images"
router.route("/")
  .get(imageController.findAll)

// Matches with "/api/images/:id"
router
  .route("/:id")
  .get(imageController.findById)

module.exports = router;