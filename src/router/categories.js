const express = require("express");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  img: String,
});

const Category = mongoose.model("Category", schema);

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const category = await Category.find();
    res.send(category);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.send(category);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const category = new Category({
      name: req.body.name,
      img: req.body.img,
    });
    await category.save();
    res.send(category);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      img: req.body.img,
    });
    await category.save();
    res.send(category);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.send(category);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
