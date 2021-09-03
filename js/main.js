const API_KEY = `c31a3bd42e0373fb4da8b0ea202fc0a7`;
const searchTemperature = () => {
    const city = document.getElementById('city-name');
    const cityName = city.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = temperature => {
    console.log(temperature);
}