import React, { useEffect, useState } from "react";
import "../styles/weather.css";
import preassureImg from "../assets/weather/pressure.svg";
import windImg from "../assets/weather/wind.svg";
import humidityImg from "../assets/weather/humidity.svg";
import { useQuery, useQueryClient } from "@tanstack/react-query";
function Weather({ locationData, time }) {
  const [currentTime, setCurrentTime] = useState(time());
  const {
    isLoading,
    error,
    data: weather,
  } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
    staleTime: 60000,
  });
  async function getWeather() {
    const URL = "/api/weather";
    const responce = await fetch(URL + locationData);
    const data = responce.json();
    return data;
  }
  let myinterval = null;
  useEffect(() => {
    if (!myinterval) {
      myinterval = setInterval(() => {
        setCurrentTime(time());
      }, 6000);
    }
    return () => {
      if (myinterval) {
        clearInterval(myinterval);
      }
    };
  }, []);

  const weatherTemplate = {
    localtime: "Loading weather Failed Please allow location permission",
    condition: {
      text: "Loading...",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      code: "1003",
    },
    temp_c: "loading...",
    pressure_mb: "loading...",
    wind_kph: "loading...",
    humidity: "loading...",
  };

  return (
    <div className='weather'>
      <div className='dateNtime'>{currentTime}</div>
      <div className='weather-info'>
        <div className='currentWeather'>
          <img
            src={
              isLoading
                ? weatherTemplate.condition.icon
                : error
                ? error.message
                : weather.current.condition.icon
            }
          />
          <p>
            {isLoading
              ? weatherTemplate.condition.text
              : error
              ? error.message
              : weather.current.condition.text}
          </p>
        </div>
        <div className='seperator'></div>
        <div className='currentTemp'>
          <h1>
            {parseInt(
              isLoading ? weatherTemplate.temp_c : error ? error.message : weather.current.temp_c
            )}
            °C
          </h1>
          <div className='subwindows'>
            <img src={preassureImg} />
            <div className='data'>
              <p>
                {parseInt(
                  isLoading
                    ? weatherTemplate.pressure_mb
                    : error
                    ? error.message
                    : weather.current.pressure_mb
                )}{" "}
                mbar
              </p>
              <p>Pressure</p>
            </div>
          </div>
        </div>
        <div className='seperator'></div>
        <div className='currentWind'>
          <div className='subwindows'>
            <img src={windImg} />
            <div className='data'>
              <p>
                {isLoading
                  ? weatherTemplate.wind_kph
                  : error
                  ? error.message
                  : weather.current.wind_kph}{" "}
                km/h
              </p>
              <p>wind</p>
            </div>
          </div>
          <div className='subwindows'>
            <img src={humidityImg} />
            <div className='data'>
              <p>
                {parseInt(
                  isLoading
                    ? weatherTemplate.humidity
                    : error
                    ? error.message
                    : weather.current.humidity
                )}
                %
              </p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
