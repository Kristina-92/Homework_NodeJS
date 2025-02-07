function convertMilesToKm(miles) {
  const milesToKm = miles * 1.609;
  return milesToKm;
}

function convertCelsuisToFahrenheit(celsiusDegrees) {
  const celsiusToFarhenheit = celsiusDegrees * 1.8 + 32;
  return celsiusToFarhenheit;
}

function convertPoundsToKilogram(pounds) {
  const ponudsToKg = pounds / 2.2046;
  return ponudsToKg;
}

function convertFeetToMetres(feet) {
  const feetToMetres = feet * 0.3048;
  return feetToMetres;
}

module.exports = {
  convertMilesToKm,
  convertCelsuisToFahrenheit,
  convertPoundsToKilogram,
  convertFeetToMetres,
};
