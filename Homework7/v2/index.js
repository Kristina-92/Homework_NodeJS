const express = require("express");

const {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
} = require("./handlers/books");
const app = express();

app.use(express.json());

app.get("/books", getAllBooks);

app.post("/books", addBook);
app.put("/books/:id", updateBook);
app.delete("/books/:id", deleteBook);

app.listen(3030, () => {
  console.log("Server is listening on port 3030");
});
