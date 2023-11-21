import React, { useState } from "react";

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='formWindow'>
      <h1>Super App</h1>
      <p className='acc'>Create your new account</p>
      <form onSubmit={handleSubmit}>
        <div className='inputContainer'>
          <input name='FullName' type='text' placeholder='Name' />
          <label className='errorMessage'>Field is required</label>
        </div>
        <div className='inputContainer'>
          <input name='username' type='text' placeholder='UserName' />
          <label className='errorMessage'>Field is required</label>
        </div>
        <div className='inputContainer'>
          <input name='email' type='text' placeholder='Email' />
          <label className='errorMessage'>Field is required</label>
        </div>
        <div className='inputContainer'>
          <input name='number' type='number' placeholder='Mobile' />
          <label className='errorMessage'>Field is required</label>
        </div>

        <div className='inputContainer'>
          <div className='checkboxContainer'>
            <input id='T&C' name='T&C' type='checkbox' />
            <label htmlFor='T&C'>Share my registration data with Superapp</label>
          </div>
          <label className='errorMessage'>Check this box if you want to proceed</label>
        </div>
        <button>SIGN UP</button>
      </form>
      <div className='Terms'>
        <p>By clicking on Sign up. you agree to Superapp Terms and Conditions of Use</p>
        <br />
        <p>
          To learn more about how Superapp collects, uses, shares and protects your personal data
          please head Superapp Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Form;
