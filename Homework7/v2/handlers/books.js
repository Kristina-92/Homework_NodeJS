const { read, write } = require("../read-write");

const getAllBooks = async (req, res) => {
  let books = await read("data.json");
  return res.send(books);
};

const addBook = async (req, res) => {
  let books = await read("data.json");
  books.push(req.body);
  await write("data.json", books);
  return res.send("Book added successfully");
};

const updateBook = async (req, res) => {
  let books = await read("data.json");
  books = books.map((book, index) => {
    if (Number(req.params.id) === index) {
      return {
        ...book,
        ...req.body,
      };
    }
    return book;
  });
  await write("data.json", books);
  return res.send(`Book with index ${req.params.id} updated successfully`);
};

const deleteBook = async (req, res) => {
  let books = await read("data.json");
  books = books.filter((_, index) => index !== Number(req.params.id));
  await write("data.json", books);
  return res.send(`Book with index ${req.params.id}, deleted successfully`);
};

module.exports = { getAllBooks, addBook, updateBook, deleteBook };
