// Assignment 1: Daily Temperature Analyzer
// This module exposes reusable temperature analysis functions.
const temperatures = [32, 35, 28, 40, 38, 30, 42];

export function getTemperaturesAbove(temps, threshold = 35) {
  return temps.filter(temp => temp > threshold);
}

export function convertCelsiusToFahrenheit(temps) {
  return temps.map(temp => Math.round(temp * 1.8 + 32));
}

export function getAverageTemperature(temps) {
  if (!temps.length) return null;
  const sum = temps.reduce((acc, temp) => acc + temp, 0);
  return sum / temps.length;
}

export function findFirstTemperatureAbove(temps, threshold = 40) {
  return temps.find(temp => temp > threshold);
}

export function findTemperatureIndex(temps, value) {
  return temps.findIndex(temp => temp === value);
}

console.log('Temperature analysis results:');
console.log(getTemperaturesAbove(temperatures));
console.log(convertCelsiusToFahrenheit(temperatures));
console.log(getAverageTemperature(temperatures));
console.log(findFirstTemperatureAbove(temperatures));
console.log(findTemperatureIndex(temperatures, 28));