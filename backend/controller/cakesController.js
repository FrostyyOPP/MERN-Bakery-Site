const asyncHandler = require("express-async-handler ");

const getCakes = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Cake" });
});

const postCakes = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }
  res.status(200).json({ message: "Post Cake" });
});

const updateCakes = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Cake ${req.params.id}` });
});

const deleteCakes = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Cake ${req.params.id}` });
});

module.exports = {
  getCakes,
  postCakes,
  updateCakes,
  deleteCakes,
};
