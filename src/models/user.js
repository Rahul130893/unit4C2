const mongoose = require("mongoose");

const userschema= new mongoose.Schema(
    {
        firstName:{type:String, require:true},
        middleName:{type:String},
        lastName:{type:String, require:true},
        age:{type:Number, require:true},
        email:{type:String, require:true},
        address:{type:String, require:true},
        gender:{type:String},
    },
    {
        versionKey:false,
        timestamps:true
    }

)

const User=mongoose.model("user", userschema)
module.exports= User;