const API_KEY = `c31a3bd42e0373fb4da8b0ea202fc0a7`;
const searchTemperature = () => {
    const city = document.getElementById('city-name');
    const cityName = city.value;
    city.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    
    // set weather icon
    const iconUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src', iconUrl)
    console.log(temperature);
}