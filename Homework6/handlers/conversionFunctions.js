function milesToKm(miles) {
  return miles * 1.6;
}

function celsiusToFahrenheit(celsiusDegrees) {
  return celsiusDegrees * 1.8 + 32;
}

function poundsToKilograms(pounds) {
  return pounds / 2.2;
}

function feetToMetres(feet) {
  return feet * 0.3;
}

function secondsToMinutes(seconds) {
  return seconds / 60;
}
module.exports = {
  milesToKm,
  celsiusToFahrenheit,
  poundsToKilograms,
  feetToMetres,
  secondsToMinutes,
};
