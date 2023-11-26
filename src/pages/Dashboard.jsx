import React from "react";
import "../styles/dashBoard.css";
import Userinfo from "../components/Userinfo";
import Notes from "../components/Notes";
import Weather from "../components/Weather";
import CountDown from "../components/CountDown";
import Everest from "../components/Everest";
import { useLoaderData } from "react-router-dom";
export const Loaction = async () => {
  return new Promise((resolve, reject) => {
    const onscusses = (coOrdinates) => {
      const locaton = `?q=${coOrdinates.coords.latitude},${coOrdinates.coords.longitude}`;
      resolve(locaton);
    };
    const onfail = (error) => {
      reject(error);
    };
    navigator.geolocation.getCurrentPosition(onscusses, onfail);
  });
};
function Dashboard() {
  function time() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
    return formattedDateTime;
  }

  const locationData = useLoaderData();
  return (
    <div className='dashBoardPage'>
      <div className='mainPage'>
        <div className='div1'>
          <Userinfo />
        </div>
        <div className='div2'>
          <Weather time={time} locationData={locationData} />
        </div>
        <div className='div3'>
          <CountDown />
        </div>
        <div className='div4'>
          <Notes />
        </div>
        <div className='div5'>
          <Everest time={time} />
        </div>
      </div>
      <footer className='nextPageFooter'>
        <button>Browse</button>
      </footer>
    </div>
  );
}

export default Dashboard;
