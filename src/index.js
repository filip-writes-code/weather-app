import "./styles.css";
import { getWeatherData } from "./api.js";
import { hideSpinner, renderWeather, showError, showSpinner } from "./dom.js";

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

handleWeather("boulder co");
