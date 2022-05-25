const express = require("express");

const app = express();
const PORT = 8000;
const connectDb = require("./database/ConnectDb");
const Schema = require("./schema/dbSchema");

//Database
connectDb();

app.post("/save", (req, res) => {
  const user = req.body;
  const dbUser = Schema({
    Name: user.Name,
    Class: user.Class,
    Age: user.Age,
    Attendance: user.Attendance,
  });
  dbUser.save();
  res.json({ message: "success" });
});

app.get("/", (req, res) => {
  res.end(<h1>Working</h1>);
});
app.listen(PORT, () => {
  console.log("hello", `http://localhost:${PORT} `);
});
