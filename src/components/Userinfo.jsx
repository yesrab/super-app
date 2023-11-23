import React, { useEffect, useState } from "react";
import "../styles/userInfo.css";
function Userinfo() {
  const [userInfo, setUserInfo] = useState({
    fullname: "Full Name",
    username: "admin",
    email: "name@mail.com",
    number: "1234567890",
    tnc: "on",
  });
  const [selectedCatagory, setSelectedCatagory] = useState([]);
  useEffect(() => {
    const sotredData = JSON.parse(localStorage.getItem("userdata"));
    const cat = JSON.parse(localStorage.getItem("usercatagory"));

    if (cat) {
      setSelectedCatagory(cat);
    }
    if (sotredData) {
      setUserInfo(sotredData);
    }
  }, []);

  return (
    <div className='userInfo'>
      <div className='profilePic'></div>
      <div className='userInfoDetails'>
        <p>{userInfo.fullname}</p>
        <p>{userInfo.email}</p>
        <h2>{userInfo.email}</h2>
        <div className='genreContainer'>
          {selectedCatagory.map((genre) => (
            <div key={genre} className='genres'>
              {genre}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
