import { useState } from "react";
import axios from "axios";
import SearchBar from "./component/SearchBar";
import WeatherCard from "./component/WeatherCard";

const API_KEY = "fab38ca95ab1e664853b2cafb94fa5f5"; // Replace with your actual API key

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      alert("City not found. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">🌤️ Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <p>Loading...</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
