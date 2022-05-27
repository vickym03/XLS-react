// const router = require("express").Router()
// const Schema= require("../schema/dbSchema")

// router.post("/", (req,res)=>{

//     //console.log("back req", req)
//       console.log("back req.body", req.body)
//       const user ={...req.body};
//       const dbUser = new Schema({
//         Name: user.Name.toLowerCase(),
//         Class: user.Class,
//         Age:user.Age,
//         Attendance: user.Attendance,
//       });
//       dbUser.save();
//       res.json({ message: "success" });
// })

// module.exports = router