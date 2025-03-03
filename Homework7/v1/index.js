const { getAllBooks, addBook, editBook, deleteBook } = require("./books");

async function readData() {
  // const books = await getAllBooks("data.json");
  // console.log("Books Library:", books);
  await addBook({
    title: "Harry Potter and the Goblet of Fire",
    author: "J. K. Rowling",
    releaseYear: 2000,
    pages: 636,
  });

  // await editBook(0, { releaseYear: 1321 });

  // await deleteBook(13);
}

readData();
