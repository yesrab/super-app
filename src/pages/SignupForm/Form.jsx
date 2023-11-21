import React from "react";
import { useNavigate } from "react-router-dom";

const validations = {
  fullname: (value) => {
    return value.length > 3;
  },
  username: (value = "") => {
    return value.match(/^\w+$/i);
  },
  email: (value) => {
    return value.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/);
  },
  number: (value) => {
    return value.match(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
    );
  },
  tnc: (value) => !!value,
};

function Form() {
  const nav = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    let valid = true;
    const form = document.getElementById("signUpform");
    for (const [n, f] of Object.entries(validations)) {
      const v = form[n];
      const xxx = document.getElementById(n);
      if (!f(v.type === "checkbox" ? v.checked : v.value)) {
        xxx.style.display = "block";
        valid = false;
      } else {
        xxx.style.display = "none";
      }
    }
    if (valid) {
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData);
      console.log(userData);
      localStorage.setItem("userdata", JSON.stringify(userData));
      nav("catagory");
    }
  }

  return (
    <div className='formWindow'>
      <h1>Super App</h1>
      <p className='acc'>Create your new account</p>
      <form id='signUpform' onSubmit={handleSubmit}>
        <div className='inputContainer'>
          <input name='fullname' type='text' placeholder='Name' />
          <label id='fullname' className='errorMessage'>
            Your name is required
          </label>
        </div>
        <div className='inputContainer'>
          <input name='username' type='text' placeholder='UserName' />
          <label id='username' className='errorMessage'>
            A username is required
          </label>
        </div>
        <div className='inputContainer'>
          <input name='email' type='text' placeholder='Email' />
          <label id='email' className='errorMessage'>
            Email is required
          </label>
        </div>
        <div className='inputContainer'>
          <input name='number' type='number' placeholder='Mobile' />
          <label id='number' className='errorMessage'>
            PhoneNumber is required
          </label>
        </div>

        <div className='inputContainer'>
          <div className='checkboxContainer'>
            <input name='tnc' type='checkbox' />
            <label className='checkboxLable' htmlFor='tnc'>
              Share my registration data with Superapp
            </label>
          </div>
          <label id='tnc' className='errorMessage'>
            Check this box if you want to proceed
          </label>
        </div>
        <button>SIGN UP</button>
      </form>
      <div className='Terms'>
        <p>
          By clicking on Sign up. you agree to Superapp{" "}
          <span className='green'>Terms and Conditions of Use</span>
        </p>
        <br />
        <p>
          To learn more about how Superapp collects, uses, shares and protects your personal data
          please head Superapp <span className='green'>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default Form;
