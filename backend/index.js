const regreq = require("./service/register");
const express = require("express");
const db = require("./service/database");
const route = require("./route");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running  on port 3000");
});

//-------------------Register--------------
app.post("/register", (req, res) => {
  regreq
    .regAccnt(req.body.Name, req.body.Email, req.body.Password, req.body.dob)
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});

//---------------Log in-------------------------
app.post("/login", (req, res) => {
  regreq.logAcnt(req.body.Email, req.body.Password).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

app.use("/api", route);
