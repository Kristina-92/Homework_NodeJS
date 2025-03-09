const { read, add, numberToWords, deleteRecipe } = require("../models/helpers");

const getRecipesForm = async (req, res) => {
  res.render("form-recipes");
};

const getRecipes = async (req, res) => {
  try {
    const recipes = await read("recipes.json");
    res.render("recipes", { recipes });
    console.log(recipes);
  } catch (error) {
    console.error("Error reading recipes:", error);
    res.status(500).send("Internal Server Error");
  }
};

const postRecipesForm = async (req, res) => {
  const { id, recipe, ingredients, method } = req.body;

  let ingredientsObj = {};
  ingredients.split(/\n/).reduce((acc, ingredientsAndQuantity) => {
    const [ingredient, quantity] = ingredientsAndQuantity
      .split(":")
      .map((item) => item.trim());
    if (ingredient && quantity) {
      acc[ingredient] = quantity;
    }
    return acc;
  }, ingredientsObj);

  let methodObj = {};
  method.split(/\n/).reduce((acc, methodSteps, index) => {
    const stepKey = `${numberToWords(index + 1)}Step`;
    // console.log("Step key:", stepKey);
    acc[stepKey] = methodSteps.trim().substring(2);
    console.log(methodSteps);
    return acc;
  }, methodObj);

  const newRecipe = {
    id,
    recipe,
    ingredients: ingredientsObj,
    method: methodObj,
  };

  try {
    await add(newRecipe);
    res.redirect("/recipes");
  } catch (error) {
    console.error("Error saving recipe:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getRecipesRemove = async (req, res) => {
  const index = parseInt(req.query.i);
  await deleteRecipe(index);
  // console.log(index);
  res.redirect("/recipes");
};

module.exports = {
  getRecipesForm,
  getRecipes,
  postRecipesForm,
  getRecipesRemove,
};
