import React, { useEffect, useState } from "react";
import "../styles/weather.css";

import preassureImg from "../assets/weather/pressure.svg";
import windImg from "../assets/weather/wind.svg";
import humidityImg from "../assets/weather/humidity.svg";

function Weather({ weatherData }) {
  // const [location, setLocation] = useState("&q=80.435553,16.2896867&aqi=no");
  // console.log(weatherData);
  const weatherTemplate = {
    localtime: "Loading weather Failed Please allow location permission",
    condition: {
      text: "Error",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      code: "1003",
    },
    temp_c: "Error",
    pressure_mb: "Error",
    wind_kph: "Error",
    humidity: "Error",
  };
  const [weather, setWeather] = useState(weatherData ? weatherData : weatherTemplate);

  // useEffect(() => {
  //   console.log("component mounted");
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   const errorCallback = (error) => {
  //     console.log(error);
  //   };
  //   try {
  //     const getWeather = async (coOrdinates) => {
  //       const location = `&q=${coOrdinates.coords.latitude},${coOrdinates.coords.longitude}&aqi=no`;
  //       console.log(URL + location);
  //       const responce = await fetch(URL + location, { signal });
  //       console.log(responce);
  //       const data = await responce.json();
  //       setWeather({
  //         localtime: data.location.localtime,
  //         condition: data.current.condition,
  //         temp_c: data.current.temp_c,
  //         pressure_mb: data.current.pressure_mb,
  //         wind_kph: data.current.wind_kph,
  //         humidity: data.current.humidity,
  //       });
  //     };
  //     navigator.geolocation.getCurrentPosition(getWeather, errorCallback);
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);
  return (
    <div className='weather'>
      <div className='dateNtime'>{weather.localtime}</div>
      <div className='weather-info'>
        <div className='currentWeather'>
          <img src={weather.condition.icon} />
          <p>{weather.condition.text}</p>
        </div>
        <div className='seperator'></div>
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
        <div className='seperator'></div>
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
