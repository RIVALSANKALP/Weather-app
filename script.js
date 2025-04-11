const apiKey = 59b1b6f13586da7b4a1b18d3de2af683; // Replace this with your OpenWeatherMap API key

document.getElementById("searchBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("weatherResult").classList.remove("hidden");
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = `🌡️ ${data.main.temp} °C`;
    document.getElementById("description").textContent = `🌥️ ${data.weather[0].description}`;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } catch (error) {
    alert("City not found. Try again!");
  }
});
