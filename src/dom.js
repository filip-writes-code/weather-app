const cityName = document.querySelector(".city");
const currentTemp = document.querySelector(".current-temp");
const conditions = document.querySelector(".conditions");
const high = document.querySelector(".high");
const low = document.querySelector(".low");
const windSpeed = document.querySelector(".wind-speed");
const windGusts = document.querySelector(".wind-gusts");

export function renderWeather(dataObject) {
  cityName.textContent = dataObject.city;
  currentTemp.textContent = dataObject.tempCurrent;
  conditions.textContent = dataObject.currentConditions;
  high.textContent = `High: ${dataObject.tempMax}°`;
  low.textContent = `Low: ${dataObject.tempMin}°`;
  windSpeed.textContent = `Wind: ${dataObject.windSpeed}`;
  windGusts.textContent = `Wind: ${dataObject.windGust}`;
}
