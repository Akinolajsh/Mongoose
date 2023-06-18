const mongoose= require("mongoose")

const NewUserSchema= mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNum: {
        type: Number,
    },
})

const UserModel= mongoose.model("UserModel", NewUserSchema)


module.exports= UserModel