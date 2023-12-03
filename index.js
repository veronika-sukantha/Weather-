function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
const celsiusInput = document.getElementById("celsius");
const convertButton = document.getElementById("convert");
const resultElement = document.getElementById("result");
convertButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    const celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
        resultElement.textContent = `${fahrenheitValue.toFixed(2)} °F`;
    } else {
        resultElement.textContent = "Invalid input.";
    }
});
const apiKey = "API_KEY";

function getWeather() {
  const cityName = document.getElementById("city-name-input").value;
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(apiURL)
    .then(response => response.json())
    .then(weatherData => {
      const cityName = weatherData.name;
      const temperature = weatherData.main.temp;
      document.getElementById("input").innerText = cityName;
      document.getElementById("celcious").innerText = temperature + "°C";
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}

// Attach this function to the submit button
document.getElementById("add").addEventListener("click", getWeather());