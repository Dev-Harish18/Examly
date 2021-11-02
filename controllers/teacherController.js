const Exam = require("../models/Exam");
const catchAsync = require("../utils/catchAsync");
const Result = require("../models/Result");
const AppError = require("../utils/AppError");

exports.createExam = catchAsync(async (req, res, next) => {
  const exam = await Exam.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      exam: { ...exam, createdBy: req.user._id },
    },
  });
});

exports.getResults = catchAsync(async (req, res, next) => {
  const results = await Result.find({ examId: req.params.id });
  if (!results) return next(new AppError(404, "No results found"));
  res.status(200).json({
    status: "success",
    data: {
      results,
    },
  });
});
exports.getResult = catchAsync(async (req, res, next) => {
  const result = await Result.findOne({
    submittedBy: req.params.studentId,
    examId: req.params.examId,
  });
  if (!result) return next(new AppError(404, "No such result found"));
  res.status(200).json({
    status: "success",
    data: {
      result,
    },
  });
});
exports.publishResult = catchAsync(async (req, res, next) => {
  const results = await Result.updateMany(
    { examId: req.params.id },
    { published: true }
  );
  if (!results) return next(new AppError(404, "No such Exams found"));
  res.status(200).json({
    status: "success",
    message: "Results have been published successfully",
  });
});
