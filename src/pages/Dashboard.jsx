import React from "react";
import "../styles/dashBoard.css";
import Userinfo from "../components/Userinfo";
import Notes from "../components/Notes";
import Weather from "../components/Weather";
import CountDown from "../components/CountDown";
import Everest from "../components/Everest";
function Dashboard() {
  return (
    <div className='dashBoardPage'>
      <div className='mainPage'>
        <div className='div1'>
          <Userinfo />
        </div>
        <div className='div2'>
          <Weather />
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
