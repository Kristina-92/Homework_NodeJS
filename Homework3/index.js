const { read, write } = require("./read-write");
const { appendText } = require("./append");

async function writeFile() {
  try {
    await write("text.txt", "Hello");
    const readContent = await read("text.txt");
    console.log(readContent);
  } catch (err) {
    console.log(err);
  }
}

writeFile();

async function appendFilefunc() {
  try {
    await appendText("./text.txt", " world!");
    const readModifiedFile = await read("text.txt");
    console.log(readModifiedFile);
  } catch (err) {
    console.error(err);
  }
}

appendFilefunc();
