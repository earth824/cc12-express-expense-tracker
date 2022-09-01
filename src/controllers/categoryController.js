const { v4: uuidv4 } = require('uuid');
const { validateCategory } = require('../utils/validator');
const { readCategory, writeCategory } = require('../dbs/file');

exports.getAllCategory = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

exports.getCategoryById = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const { title, type } = req.body;
    validateCategory(title, type);
    const categories = await readCategory();
    const category = { title, type: type.toUpperCase(), id: uuidv4() };
    categories.unshift(category);
    await writeCategory(categories);
    res.json({ category });
  } catch (err) {
    next(err);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
