import React, { useEffect, useState } from "react";
import "../styles/weather.css";
const key = import.meta.env.VITE_WEATHER_API_KEY;
const URL = `https://api.weatherapi.com/v1/current.json?key=${key}`;

import preassureImg from "../assets/weather/pressure.svg";
import windImg from "../assets/weather/wind.svg";
import humidityImg from "../assets/weather/humidity.svg";
function Weather() {
  // const [location, setLocation] = useState("&q=80.435553,16.2896867&aqi=no");
  const [weather, setWeather] = useState({
    localtime: "2023-11-23 16:21",
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      code: "1003",
    },
    temp_c: "27.0",
    pressure_mb: "1009.0",
    wind_kph: "15.1",
    humidity: "89",
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const successCallback = (position) => {
      // console.log(possition);
      setLocation(`&q=${position.coords.latitude},${position.coords.longitude}&aqi=no`);
      // console.log(location);
      // console.log(URL + location);
    };
    const errorCallback = (error) => {
      console.log(error);
    };

    const getWeather = async (coOrdinates) => {
      const location = `&q=${coOrdinates.coords.latitude},${coOrdinates.coords.longitude}&aqi=no`;
      // console.log(URL + location);
      const responce = await fetch(URL + location, { signal });
      const data = await responce.json();
      console.log(data);
    };
    try {
      navigator.geolocation.getCurrentPosition(getWeather, errorCallback);
    } catch (err) {
      console.log(err);
    }

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className='weather'>
      <div className='dateNtime'>{weather.localtime}</div>
      <div className='weather-info'>
        <div className='currentWeather'>
          <img src={weather.condition.icon} />
          <p>{weather.condition.text}</p>
        </div>
        <div className='currentTemp'>
          <h1>{parseInt(weather.temp_c)}°C</h1>
          <div className='subwindows'>
            <img src={preassureImg} />
            <div className='data'>
              <p>{parseInt(weather.pressure_mb)} mbar</p>
              <p>Pressure</p>
            </div>
          </div>
        </div>
        <div className='currentWind'>
          <div className='subwindows'>
            <img src={windImg} />
            <div className='data'>
              <p>{weather.wind_kph} km/h</p>
              <p>wind</p>
            </div>
          </div>
          <div className='subwindows'>
            <img src={humidityImg} />
            <div className='data'>
              <p>{parseInt(weather.humidity)}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
