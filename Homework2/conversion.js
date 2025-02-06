function convertMilesToKm(miles) {
  const milesToKm = Math.round(miles * 1.609);
  return `${miles} miles equals ${milesToKm} km`;
}

function convertCelsuisToFahrenheit(celsiusDegrees) {
  const celsiusToFarhenheit = Math.round(celsiusDegrees * 1.8 + 32);
  return `${celsiusDegrees}°C equals ${celsiusToFarhenheit}°F`;
}

function convertPoundsToKilogram(pounds) {
  const ponudsToKg = Math.round(pounds / 2.2046);
  return `${pounds} pounds equals ${ponudsToKg} kilograms`;
}

function convertFeetToMetres(feet) {
  const feetToMetres = Math.round(feet * 0.3048);
  return `${feet} feet equals ${feetToMetres} meters`;
}

module.exports = {
  convertMilesToKm,
  convertCelsuisToFahrenheit,
  convertPoundsToKilogram,
  convertFeetToMetres,
};
