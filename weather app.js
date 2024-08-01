document.getElementById('search').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city');
        return;
    }

    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p>${error.message}</p>`;
    }
});

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>precipitation:${data.main.precip}%</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} k/h</p>
    `;
}