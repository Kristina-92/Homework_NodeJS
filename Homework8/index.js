const express = require("express");

const { getText, postTextAnalysis } = require("./controllers/analyzer");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.get("/analyze", getText);
app.post("/analyze", postTextAnalysis);

app.listen(5050, () => console.log("Server is listening at port 5050"));
