const fs = require("fs");

const read = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) return reject(err);
      data = JSON.parse(data);
      return resolve(data);
    });
  });
};

const write = async (fileName, data) => {
  data = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

const add = async (data) => {
  let file = await read("recipes.json");
  file.push(data);
  await write("recipes.json", file);
};

function numberToWords(num) {
  const oneToNine = [
    "",
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
  ];
  if (num < 10) return oneToNine[num];
}

const saveRecipes = async (recipes) => {
  try {
    await write("recipes.json", recipes);
  } catch (err) {
    console.error("Error saving recipes:", err.message);
  }
};

const deleteRecipe = async (index) => {
  let recipesList = await read("recipes.json");
  recipesList.splice(index, 1);
  await saveRecipes(recipesList);
};

module.exports = { read, add, numberToWords, deleteRecipe };
