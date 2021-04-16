// http://api.openweathermap.org/

const getWeatherByCoordinates = async (lat, lon) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7aaf623d9340b65002f24537dec94ef6`);
    const weather = await response.json();
    return weather;
};

export { getWeatherByCoordinates };
