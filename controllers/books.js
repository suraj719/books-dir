const Book = require("../models/Book");


const getAllBooks = async (req, res) => {
  try {
    const book = await Book.find({});
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ book });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getBook = async (req, res) => {
  try {
    const { id: bookID } = req.params;
    const book = await Book.findOne({ _id: bookID });
    if (!book) {
      return res.status(404).json({ msg: `no books found with id ${bookID}` });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id: bookID } = req.params;
    const book = await Book.findOneAndUpdate({ _id: bookID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      return res.status(404).json({ msg: `no books found with id ${bookID}` });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id: bookID } = req.params;
    const book = await Book.findOneAndDelete({ _id: bookID });
    if (!book) {
      return res.status(404).json({ msg: `no books found with id ${bookID}` });
    }
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
};
