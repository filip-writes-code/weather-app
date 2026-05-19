import "./styles.css";
import { getWeatherData } from "./api.js";
import { hideSpinner, renderWeather, showError, showSpinner } from "./dom.js";

const searchBtn = document.getElementById("search-btn");

async function handleWeather(location) {
  showSpinner();
  try {
    const data = await getWeatherData(location);
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
  const location = locationInputField.value;
  locationInputField.value = "";
  handleWeather(location);
});

//initial render
handleWeather("Boulder CO");
