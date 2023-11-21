import React, { useState } from "react";
import FormElements from "./FormElements";
function Form() {
  const [values, setValues] = useState({
    FullName: "",
    username: "",
    email: "",
    MobileNumber: "",
    conditions: false,
  });

  const inputs = [
    {
      id: 1,
      name: "FullName",
      type: "text",
      placeholder: "Full Name",
      errorMessage: "name should only contain alphabets",
      label: "Full Name",
      required: true,
    },

    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username can only have A-z uppercase and lowercase, 0-9 numbers and only be one word.",
      label: "Username",
      pattern: "[A-Za-z0-9]+",
      required: true,
    },

    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "MobileNumber",
      type: "tel",
      placeholder: "Mobile",
      errorMessage: "Your Phone number is required",
      label: "Mobile",

      required: true,
    },
    {
      id: 5,
      name: "conditions",
      type: "checkbox",
      errorMessage: "Please accept the Terms & Conditions to move forward",
      label: "T&C",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(values);
  };

  const onChange = (e) => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setValues({ ...values, [name]: checked });
    } else {
      setValues({ ...values, [name]: value });
    }
    // setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Super App</h1>
        <p>Create your account</p>
        {inputs.map((input) => (
          <FormElements key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
