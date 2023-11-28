import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profileIcon from "../assets/profileIcon.svg";
import Genres from "../components/Genres";
import "../styles/browser.css";
import catagoryObj from "../libs/catagorySelectionData";
function Browse() {
  const [geners, setGeners] = useState(null);
  const nav = useNavigate();
  function handleBack() {
    nav("/dashboard");
  }
  useEffect(() => {
    const userCatagory = JSON.parse(localStorage.getItem("usercatagory"));
    if (!userCatagory) {
      nav("/catagory");
    }
    setGeners(userCatagory);
  }, []);

  return (
    <div className='browsePage'>
      <header>
        <h1 className='LOGO'>Super app</h1>
        <img className='profileIcon' src={profileIcon} />
      </header>
      <div className='entertainmentContent'>
        <h3 className='ent'>Entertainment according to your choice</h3>
        {geners?.map((item) => {
          return (
            <Genres
              key={catagoryObj
                .map((catagory) => {
                  if (catagory.title === item) {
                    return catagory.id;
                  }
                })
                .filter((value) => value !== null && value !== undefined)
                .join("")}
              genreID={catagoryObj
                .map((catagory) => {
                  if (catagory.title === item) {
                    return catagory.id;
                  }
                })
                .filter((value) => value !== null && value !== undefined)
                .join("")}
              genre={item}
            />
          );
        })}
        <footer className='nextPageFooter'>
          <button onClick={handleBack}>Back to Dashboard</button>
        </footer>
      </div>
    </div>
  );
}

export default Browse;
