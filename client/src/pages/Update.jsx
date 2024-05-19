import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    location: "",
    contact_no: "",
    dob: "",
    sex: "",
    aadhar_no: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const employeeId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/employee/${employeeId}`);
        setEmployee(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmployee();
  }, [employeeId]);

  const handleChange = (e) => {
    setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/employee/${employeeId}`, employee);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update Employee</h1>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={employee.name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={employee.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Location"
        name="location"
        value={employee.location}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Contact Number"
        name="contact_no"
        value={employee.contact_no}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Date of Birth"
        name="dob"
        value={employee.dob}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Sex"
        name="sex"
        value={employee.sex}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Aadhar Number"
        name="aadhar_no"
        value={employee.aadhar_no}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all Employees</Link>
    </div>
  );
};

export default Update;
