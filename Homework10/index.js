const express = require("express");

const app = express();

const {
  getRecipesForm,
  getRecipes,
  postRecipesForm,
  getRecipesRemove,
} = require("./controllers/recipes");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/form", getRecipesForm);
app.get("/recipes", getRecipes);
app.post("/form", postRecipesForm);
app.get("/remove", getRecipesRemove);

app.listen(3050, () => console.log("Server is running on port 3050"));
