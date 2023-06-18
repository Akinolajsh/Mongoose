const mongoose= require("mongoose")

const MongoDB = "mongodb://0.0.0.0:27017/set07DB"

const DataBase= async()=>{
    try {
        const db = await mongoose.connect(MongoDB)
        console.log("")
        console.log(`Database connection ${db.connection.host}`)
    } catch (error) {
        console.log("error")
    }
}
module.exports= DataBase()