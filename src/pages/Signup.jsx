import React, { useRef } from "react";
import Form from "./SignupForm/Form";
import partyImage from "../assets/PartyImage.jpg";

function Signup() {
  return (
    <div className='signupPage'>
      <img src={partyImage} />
      <div className='formSection'>
        <Form />
      </div>
    </div>
  );
}

export default Signup;
