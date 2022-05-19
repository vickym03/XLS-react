const express = require("express")



const app =express()
const PORT = 8000


app.get("/", (req, res)=>{
res.end("hello")
})
app.listen(PORT, ()=>{
    console.log(  "hello", `http://localhost:${PORT} `)
})