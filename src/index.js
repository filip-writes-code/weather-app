import "./styles.css";
import { getWeatherData } from "./api.js";
import { renderWeather } from "./dom.js";

const test = await getWeatherData("Boulder CO");
console.log(test);
renderWeather(test);
