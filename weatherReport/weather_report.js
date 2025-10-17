function showweatherDetails(event) {
    event.preventDefault();

    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = 'YOUR_API_KEY'; // Замените 'YOUR_API_KEY' на ваш фактический API ключ
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl) 
    .then(response => response.json())
    .then(data => {
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>${data.icon}</p>`;
    })
    .catch(error => {
        console.error('Ошибка при получении погоды:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Не удалось получить погоду. Пожалуйста, попробуйте еще раз.</p>`;
      });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );