const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");
const authController = require("../controllers/authController");

router.use(authController.mustBeLoggedIn, authController.restrict);
router.route("/create").post(teacherController.createExam);
router.route("/results/:id").get(teacherController.getResults);
router.route("/results/:examId/:studentId").get(teacherController.getResult);
router.route("/publish/:id").get(teacherController.publishResult);

module.exports = router;
