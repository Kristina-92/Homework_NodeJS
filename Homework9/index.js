const express = require("express");

const app = express();

const {
  getForm,
  getStudents,
  postForm,
  getBrishi,
} = require("./handlers/form_handler");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/form", getForm);
app.get("/studenti", getStudents);
app.post("/form", postForm);
app.get("/brishi", getBrishi);

app.listen(3030, () => console.log("Server running on port 3030"));
