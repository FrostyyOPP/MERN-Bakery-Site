const asyncHandler = require("express-async-handler");
const Cake = require("../model/cakeModel");

const getCakes = asyncHandler(async (req, res) => {
  const cakes = await Cake.find();
  res.status(200).json(cakes);
});

const postCakes = asyncHandler(async (req, res) => {
  if (!req.body.name && req.body.price) {
    res.status(400);
    throw new Error("Please add a text");
  }

  const cake = await Cake.create({
    name: req.body.name,
    price: req.body.price,
  });
  res.status(200).json(cake);
});

const updateCakes = asyncHandler(async (req, res) => {
  const cake = await Cake.findById(req.params.id);

  if (!cake) {
    res.status(400);
    throw new Error("Cake not Found");
  }
  const updatedCake = await Cake.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedCake);
});

const deleteCakes = asyncHandler(async (req, res) => {
  const cake = await Cake.findById(req.params.id);
  if (!cake) {
    res.status(400);
    throw new Error("Cake not Found");
  }

  const deletedCake = await Cake.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedCake);
});

module.exports = {
  getCakes,
  postCakes,
  updateCakes,
  deleteCakes,
};
