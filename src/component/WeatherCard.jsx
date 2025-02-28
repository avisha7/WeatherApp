const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>{weather.weather[0].description}</p>
      <h3>{weather.main.temp}°C</h3>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
