const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const authController = require("../controllers/authController");

router.use(authController.mustBeLoggedIn);
router
  .route("/exam/:id")
  .get(studentController.getExam)
  .post(studentController.submitExam);
router.route("/results").get(studentController.getResults);
router.route("/results/:id").get(studentController.getResult);

module.exports = router;
