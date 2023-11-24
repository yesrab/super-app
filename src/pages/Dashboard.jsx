import React from "react";
import "../styles/dashBoard.css";
import Userinfo from "../components/Userinfo";
import Notes from "../components/Notes";
import Weather from "../components/Weather";
import CountDown from "../components/CountDown";
import Everest from "../components/Everest";
import { useLoaderData } from "react-router-dom";
const key = import.meta.env.VITE_WEATHER_API_KEY;
const URL = `http://api.weatherapi.com/v1/current.json?key=${key}`;
const ULR = "/api/weather";
export const weatherLoader = () => {
  try {
    return new Promise((resolve, reject) => {
      const getWeather = async (coOrdinates) => {
        const location = `&q=${coOrdinates.coords.latitude},${coOrdinates.coords.longitude}&aqi=no`;
        const location2 = `?q=${coOrdinates.coords.latitude},${coOrdinates.coords.longitude}`;
        const responce = await fetch(ULR + location2);

        if (!responce.ok) {
          const error = {
            message: "Loading data from the server failed",
            statusText: responce.statusText,
            status: responce.status,
          };
          reject(error);
        }
        const data = await responce.json();
        const weatherObj = {
          localtime: data.location.localtime,
          condition: data.current.condition,
          temp_c: data.current.temp_c,
          pressure_mb: data.current.pressure_mb,
          wind_kph: data.current.wind_kph,
          humidity: data.current.humidity,
        };
        resolve(weatherObj);
      };
      const errorCallback = (error) => {
        reject(error);
      };

      navigator.geolocation.getCurrentPosition(getWeather, errorCallback);
    });
  } catch (err) {
    return err;
  }
};
function Dashboard() {
  const weatherData = useLoaderData();
  return (
    <div className='dashBoardPage'>
      <div className='mainPage'>
        <div className='div1'>
          <Userinfo />
        </div>
        <div className='div2'>
          <Weather weatherData={weatherData} />
        </div>
        <div className='div3'>
          <CountDown />
        </div>
        <div className='div4'>
          <Notes />
        </div>
        <div className='div5'>
          <Everest />
        </div>
      </div>
      <footer className='dashBoardFooter'>this is footer element</footer>
    </div>
  );
}

export default Dashboard;
