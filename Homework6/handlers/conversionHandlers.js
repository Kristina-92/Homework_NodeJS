const {
  milesToKm,
  celsiusToFahrenheit,
  poundsToKilograms,
  feetToMetres,
  secondsToMinutes,
} = require("./conversionFunctions");

function handleMilesToKm(req, res) {
  const { miles } = req.body;
  const result = milesToKm(miles);
  res.status(200).send(`${miles} miles is equal to ${result} kilometers`);
}

function handleCelsiusToFahrenheit(req, res) {
  const { celsius } = req.body;
  const result = celsiusToFahrenheit(celsius);
  res.status(200).send(`${celsius} Celsius is equal to ${result} Fahrenheit`);
}

function handlePoundsToKilograms(req, res) {
  const { pounds } = req.body;
  const result = poundsToKilograms(pounds);
  res.status(200).send(`${pounds} pounds is equal to ${result} kilograms`);
}

function handleFeetToMetres(req, res) {
  const { feet } = req.body;
  const result = feetToMetres(feet);
  res.status(200).send(`${feet} feet is equal to ${result} meters`);
}

function handleSecondsToMinutes(req, res) {
  const { seconds } = req.body;
  const result = secondsToMinutes(seconds);
  res.status(200).send(`${seconds} seconds is equal to ${result} minutes `);
}

module.exports = {
  handleMilesToKm,
  handleCelsiusToFahrenheit,
  handlePoundsToKilograms,
  handleFeetToMetres,
  handleSecondsToMinutes,
};
