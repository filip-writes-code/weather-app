async function callWeatherApi(location) {
  const apiKey = process.env.WEBPACK_API_KEY;
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current,hours&key=${apiKey}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

export async function getWeatherData(location) {
  const apiData = await callWeatherApi(location);
  let processedWeatherData = {
    city: apiData.resolvedAddress,
    tempCurrent: apiData.currentConditions.temp,
    tempMin: apiData.days[0].tempmin,
    tempMax: apiData.days[0].tempmax,
    humidity: apiData.currentConditions.humidity,
    feelsLike: apiData.currentConditions.feelslike,
    windSpeed: apiData.currentConditions.windspeed,
    windGust: apiData.currentConditions.windgust,
    currentConditions: apiData.currentConditions.conditions,
    dailyConditions: apiData.days[0].description,
    icon: apiData.currentConditions.icon,
  };
  return processedWeatherData;
}
