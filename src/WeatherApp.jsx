import { useState } from "react";

function WeatherApp() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const input = e.target.value;
    setQuery(input);
  }

  const fetchData = async () => {
    const apiKey = "d149f79a240d0aa83a1cb813ca85908f";

    const cityName = query;

    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
      );
      if (!response.ok) throw new Error(`An error in fetching data: ${error}`);

      const responseData = await response.json();
      setData(responseData);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <hr />
      <h3>A simple weather app</h3>
      <label>Search: </label>
      <input
        type="text"
        placeholder="Enter city name"
        onChange={handleChange}
      />
      <button onClick={() => fetchData()}>Search</button>

      {isLoading && <p>Loading data...</p>}

      {data && (
        <div>
          <p>Weather: {data.weather[0].description}</p>
          <p>Temperature: {data.main.temp}K</p>
          {data.weather[0].icon && (
            <img
              src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt=""
            />
          )}
        </div>
      )}

      {error && <p>{error.message}</p>}
    </div>
  );
}

export default WeatherApp;
