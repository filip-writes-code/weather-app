import "./styles.css"

async function weatherApiCall(location) {
    const apiKey = process.env.WEBPACK_API_KEY;
    console.log(apiKey)
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=days,current,hours&key=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const weatherDataResponse = await response.json();
        return weatherDataResponse;
    } catch (err) {
        console.error(err);
    }
}

const weatherData = await weatherApiCall('denver');
console.log(weatherData);