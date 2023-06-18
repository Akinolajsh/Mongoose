const express = require("express")
require("../NewUser/config/DataBase")

const port= 3090;

const app= express()

app.use(express.json())

app.get("/",(req, res)=>{
    res.status(200).json({
        message: "My message is running fine"
    })
})

app.listen(port,()=>{
    console.log("")
    console.log("listening on port", port)
})