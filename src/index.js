import "./styles.css";
import { getWeatherData } from "./api.js";
import { hideSpinner, renderWeather, showError, showSpinner } from "./dom.js";

const searchBtn = document.getElementById("search-btn");
const unitsToggleSwitch = document.getElementById("units");

export let currentLocation = "Boulder CO";
export let units = "us";

async function handleWeather() {
  showSpinner();
  try {
    const data = await getWeatherData(currentLocation);
    renderWeather(data);
  } catch (err) {
    console.error(err);
    showError(err.message);
  }
  hideSpinner();
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const locationInputField = document.getElementById("location");
  currentLocation = locationInputField.value;
  locationInputField.value = "";
  handleWeather(currentLocation);
});

unitsToggleSwitch.addEventListener("click", () => {
  if (unitsToggleSwitch.checked) {
    units = "metric";
  } else {
    units = "us";
  }
  handleWeather();
});

//initial render
handleWeather();
