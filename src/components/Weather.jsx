import React, { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather(lat, lon) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b6f06d04fd6f7dede359be36f50e6f1b`,
        );
        const data = await response.json();
        if (response.ok) {
          setWeather(data);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        setError(error.message);
        alert("Error fetching data:", error);
      }
    }

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (error) => {
            setError("Error getting location: " + error.message);
            alert("Error getting location:", error);
            // Fetch weather for a default location if geolocation fails
            fetchWeather(41.2995, 69.2401);
          },
        );
      } else {
        setError("Geolocation is not supported by this browser.");
        alert("Geolocation is not supported by this browser.");
        fetchWeather(41.2995, 69.2401);
      }
    }

    getLocation();
  }, []);

  return (
    <div className="flex items-baseline">
      {weather ? (
        <div className="flex items-baseline gap-2 sm:text-sm">
          <p className="font-medium">{weather.name}:</p>
          <p className="sm:text-sm">
            {weather.main.temp}
            <strong>°C</strong>
          </p>
        </div>
      ) : (
        <p>Yuklanmoqda...</p>
      )}
    </div>
  );
}
