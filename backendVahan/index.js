import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "mysql-26d88a8-vahan.e.aivencloud.com",
  port: "13921",
  user: "avnadmin",
  password: "AVNS_XZOpI9SW4J1Z6MiBAtH",
  database: "vahan",
  insecureAuth : true
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/employee", (req, res) => {
  const q = "SELECT * FROM employee";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/employee", (req, res) => {
  const q = "INSERT INTO employee(`name`, `email`, `location`, `contact_no`, `dob`,`sex`, `aadhar_no`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.email,
    req.body.location,
    req.body.contact_no,
    req.body.dob,
    req.body.sex,
    req.body.aadhar_no
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/employee/:id", (req, res) => {
  const employeeId = req.params.id;
  const q = " DELETE FROM employee WHERE id = ? ";

  db.query(q, [employeeId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/employee/:id", (req, res) => {
  const employeeId = req.params.id;
  const q = "UPDATE employee SET `name`= ?, `email`= ?, `location`= ?, `contact_no`= ?,`dob`= ? ,`sex`= ?, `aadhar_no`= ?  WHERE id = ?";

  const values = [
    req.body.name,
    req.body.email,
    req.body.location,
    req.body.contact_no,
    req.body.dob,
    req.body.sex,
    req.body.aadhar_no
  ];

 
  db.query(q, [...values,employeeId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
