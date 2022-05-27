const express = require("express");
const cors =require("cors")
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;
const connectDb = require("./database/ConnectDb");

const Schema = require("./schema/dbSchema");

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const corsOptions = { credentials: true, origin: '*' }
app.use(cors(corsOptions));

//Database
connectDb();

//middleware




app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/save", (req, res) => {
  // console.log("back req", req)
  console.log("back req.body", req.body)
  const user = req.body;
  const dbUser = new Schema({
    Name: user.Name,
    Class: user.Class,
    Age: user.Age,
    Attendance: user.Attendance,
  });
  dbUser.save();
  res.json({ message: "success" });
});



app.get("/getData", (req, res)=>{
 
res.json({Name:req.dbUser.Name})
})


app.get("/", (req, res) => {
  res.end("Working");
  // console.log("working")
});

app.listen(PORT, () => {
  console.log("hello", `http://localhost:${PORT} `);
});
