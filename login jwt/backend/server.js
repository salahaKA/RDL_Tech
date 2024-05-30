const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post("/Signup", (req, res) => {
  const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("error");
    }
    return res.json(data);
  });
});

const verifyJwt = (req, res, next) => {
  const token = req.headers["access-token"];
  if (!token) {
    return res.json("We need token, Please provide it for next time");
  } else {
    jwt.verify(token, "jwtSecretKey", (err, decoded) => {
      if (err) {
        res.json("Not authenticated");
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

app.get("/checkauth", verifyJwt, (req, res) => {
  return res.json("Authenticated");
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email`=? AND `password`=?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("error");
    }
    if (data.length > 0) {
      const id = data[0].id;
      const token = jwt.sign({ id }, "jwtSecretKey", { expiresIn: 300 });
      return res.json({ Login: true, token, data });
    } else {
      return res.json("Failed");
    }
  });
});

app.listen(8081, () => {
  console.log("Server is running...");
});
