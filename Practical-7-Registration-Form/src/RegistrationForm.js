import React, { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const validate = () => {
  let newErrors = {};

  if (form.name === "") {
    newErrors.name = "Name is required";
  }

  if (form.email === "") {
    newErrors.email = "Email is required";
  } else if (!form.email.includes("@")) {
    newErrors.email = "Enter a valid email";
  }

  if (form.password === "") {
    newErrors.password = "Password is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
const handleSubmit = (e) => {
  e.preventDefault();

  if (validate()) {
    alert("Registration successful!");
  }
};

 return (
  <form onSubmit={handleSubmit}>
  <h2>User Registration Form</h2>

    <input
      type="text"
      placeholder="Name"
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })}
    />

    <br /><br />

    <input
      type="email"
      placeholder="Email"
      value={form.email}
      onChange={(e) => setForm({ ...form, email: e.target.value })}
    />

    <br /><br />

    <input
      type="password"
      placeholder="Password"
      value={form.password}
      onChange={(e) => setForm({ ...form, password: e.target.value })}
    />
    {errors.name && <p>{errors.name}</p>}
    {errors.email && <p>{errors.email}</p>}
    {errors.password && <p>{errors.password}</p>}

    <br /><br />

 <button type="submit">Register</button>
 </form>
);
}

export default RegistrationForm;
