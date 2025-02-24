const express = require("express");
const http = require("http");
const {
  handleMilesToKm,
  handleCelsiusToFahrenheit,
  handlePoundsToKilograms,
  handleFeetToMetres,
  handleSecondsToMinutes,
} = require("./handlers/conversionHandlers");

const app = express();
app.use(express.json());

app.post("/miles-to-km", handleMilesToKm);

app.post("/celsius-to-fahrenheit", handleCelsiusToFahrenheit);

app.post("/pounds-to-kilograms", handlePoundsToKilograms);

app.post("/feet-to-meters", handleFeetToMetres);

app.post("/seconds-to-minutes", handleSecondsToMinutes);

app.use((req, res) => {
  res.status(404).send("Invalid URL");
});

app.listen(5000, () => console.log("Server is running on port 5000"));
