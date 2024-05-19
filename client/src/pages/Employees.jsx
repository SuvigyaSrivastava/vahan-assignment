import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Employees = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const fetchAllemployee = async () => {
      try {
        const res = await axios.get("http://localhost:8800/employee");
        setEmployee(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllemployee();
  }, []);

  console.log(employee);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/employee/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Vahan Employees</h1>
      <div className="employee">
        {employee.map((employee) => (
          <div key={employee.id}>
            <h2>{employee.name}</h2>
            <p>Email: {employee.email}</p>
            <p>Location: {employee.location}</p>
            <p>Contact Number: {employee.contact_no}</p>
            <p>Date of Birth: {employee.dob}</p>
            <p>Sex: {employee.sex}</p>
            <p>Aadhar Number: {employee.aadhar_no}</p>
            <button
              className="delete"
              onClick={() => handleDelete(employee.id)}
            >
              Delete
            </button>
            <button className="update">
              <Link
                to={`/update/${employee.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>
      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new employee
        </Link>
      </button>
    </div>
  );
};

export default Employees;
