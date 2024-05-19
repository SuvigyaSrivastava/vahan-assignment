import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    location: "",
    contact_no: "",
    dob: "",
    sex: "",
    aadhar_no: "",
  });
  const [error, setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log("Posting: ", employee)
      
      await axios.post("http://localhost:8800/employee", employee);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Add New Employee</h1>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Location"
        name="location"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Contact Number"
        name="contact_no"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Date of Birth"
        name="dob"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Sex"
        name="sex"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Aadhar Number"
        name="aadhar_no"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all Employees</Link>
    </div>
  );
};

export default Add;