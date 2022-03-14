const mongoose = require("mongoose");

const savigsschema= new mongoose.Schema(
    {
        account_number:{type:String, require:true, unique:true},
        balance:{type:Number},
       interestRate:{type:Number, require:true},
    },
    {
        versionKey:false,
        timestamps:true
    }

)

const Savings=mongoose.model("savings", savingsschema)
module.exports= Saving;