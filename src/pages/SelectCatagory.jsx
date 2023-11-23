import React, { useEffect, useState } from "react";
import "../styles/catagorypage.css";
import catagoryObj from "../libs/catagorySelectionData";
import { useNavigate } from "react-router-dom";
function SelectCatagory() {
  const nav = useNavigate();
  const [catagories, setCatagories] = useState(["Romance", "Music", "Action"]);
  const removeCatagory = (catagory) => {
    const updatedCatagory = catagories.filter((item) => item !== catagory);
    setCatagories(updatedCatagory);
  };

  const handelCatagoryToggle = (catagory) => {
    setCatagories((prevCatagories) => {
      if (prevCatagories.includes(catagory)) {
        return prevCatagories.filter((item) => item !== catagory);
      } else {
        return [...prevCatagories, catagory];
      }
    });
  };
  const toDashboard = () => {
    if (catagories.length >= 3) {
      localStorage.setItem("usercatagory", JSON.stringify(catagories));
      nav("../dashboard");
    } else {
      return;
    }
  };
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   console.log(signal);
  //   const getData = async () => {
  //     const url = "https://unogs-unogs-v1.p.rapidapi.com/search/titles?order_by=date&type=movie";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key": "fa1219212emsh8093de4f13a0558p127b81jsn717a77f17358",
  //         "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
  //       },
  //       signal,
  //     };
  //     const responce = await fetch(url, options);
  //     const data = responce.json();
  //     console.log(data);
  //   };
  //   getData();
  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  return (
    <div className='catagoryContainer'>
      <div className='enclosure'>
        <div className='selections'>
          <h1>Super app</h1>
          <h1>Choose your entertainment category</h1>

          <div className='selectedOptions'>
            {catagories.map((item) => (
              <span key={item}>
                {item}
                <button
                  onClick={() => {
                    removeCatagory(item);
                  }}>
                  X
                </button>
              </span>
            ))}
          </div>
          {catagories.length < 3 ? (
            <div className='catagoryWarnign'>
              <span className='material-symbols-outlined'>warning</span>
              <p>Minimum 3 category required</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className='options'>
          {catagoryObj.map((obj) => (
            <div
              tabIndex={0}
              onClick={() => {
                handelCatagoryToggle(obj.title);
              }}
              key={obj.id}
              className={`catagoryElement ${obj.title} ${
                catagories.includes(obj.title) ? "selected" : ""
              } `}>
              <h4>{obj.title}</h4>
              <img src={obj.image} />
            </div>
          ))}
        </div>
      </div>
      <footer className='nextPageFooter'>
        <button onClick={toDashboard}>Next Page</button>
      </footer>
    </div>
  );
}

export default SelectCatagory;
