const mongoose = require("mongoose");
const examSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    unique: true,
    trim: true,
    validate: {
      validator: function (name) {
        return /^[a-zA-Z .]+$/.test(name);
      },
      message: "Name should contain only alphabets",
    },
    required: [true, "Please provide your name"],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  minMark: {
    type: "Number",
    required: [true, "Minimum marks required to pass must be entered"],
  },
  questions: [
    {
      name: {
        type: String,
        required: [true, "Question can't be empty"],
      },
      maxMark: {
        type: Number,
        required: [true, "Maximum marks for the Question must be entered"],
      },
    },
  ],
  keys: [
    {
      modelAns: {
        type: String,
        required: [true, "Model answer must be entered"],
      },
      keywords: [
        {
          type: String,
        },
      ],
      minLength: Number,
      maxLength: Number,
    },
  ],
  startTime: {
    type: Date,
    required: [true, "Start time of the examination must be entered"],
  },
  duration: {
    type: Number,
    required: [true, "Duration of the examination must be entered"],
  },
  maxMarks: Number,
  instructions: [
    {
      type: String,
    },
  ],
});

const Exam = mongoose.model("Exam", examSchema);
module.exports = Exam;