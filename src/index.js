import "./styles.css";
import { getWeatherData } from "./api.js";

const test = await getWeatherData("longmont");
console.log(test);
