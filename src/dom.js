import { units } from "./index.js";

const cityCurrentBox = document.querySelector(".city-current");
const cityName = document.querySelector(".city");
const currentTemp = document.querySelector(".current-temp");
const conditions = document.querySelector(".conditions");
const high = document.querySelector(".high");
const low = document.querySelector(".low");
const windSpeed = document.querySelector(".wind-speed");
const windGusts = document.querySelector(".wind-gusts");

function getSpeedUnit() {
  if (units === "us") {
    return "MPH";
  } else {
    return "KPH";
  }
}

export function renderWeather(dataObject) {
  const speedUnit = getSpeedUnit();
  cityName.textContent = dataObject.city;
  currentTemp.textContent = dataObject.tempCurrent + "°";
  conditions.textContent = dataObject.currentConditions;
  high.textContent = `High: ${dataObject.tempMax}°`;
  low.textContent = `Low: ${dataObject.tempMin}°`;
  windSpeed.textContent = `Wind: ${dataObject.windSpeed} ${speedUnit}`;
  windGusts.textContent = `Wind Gusts: ${dataObject.windGust} ${speedUnit}`;
}

export function showSpinner() {
  const spinner = document.createElement("span");
  spinner.classList.add("loader");
  cityName.classList.add("hidden");
  currentTemp.classList.add("hidden");
  cityCurrentBox.append(spinner);
}

export function hideSpinner() {
  const spinner = document.querySelector(".loader");
  spinner.remove();
  cityName.classList.remove("hidden");
  currentTemp.classList.remove("hidden");
}

export function showError(error) {
  cityName.textContent = error;
  currentTemp.textContent = "";
  conditions.textContent = "";
  high.textContent = "";
  low.textContent = "";
  windSpeed.textContent = "";
  windGusts.textContent = "";
}
