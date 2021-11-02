const nodeDandelion = require("node-dandelion");
const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");

exports.getSimilarityScore = async (modelAns, studentAns) => {
  console.log("ENter getsimscore\n");
  nodeDandelion.configure({
    app_key: "1dd8dda405d44f7098d2aaa14867883d",
    app_id: "1dd8dda405d44f7098d2aaa14867883d",
  });

  const obj = {
    string1: {
      type: "txt",
      value: modelAns,
    },
    string2: {
      type: "txt",
      value: studentAns,
    },
    lang: "en",
  };

  const result = await promisify(nodeDandelion.txtSim)(obj);
  let score = (Math.round(result.similarity * 100) / 100) * 60;
  console.log("Score after Similarity score:", score);
  return score;
};
