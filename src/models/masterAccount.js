const mongoose = require("mongoose");

const masterschema= new mongoose.Schema(
    {
       
       balance:{type:Number, require:true},
       interestRate:{type:Number, require:true},
    },
    {
        versionKey:false,
        timestamps:true
    }

)

const Master=mongoose.model("master", masterschema)
module.exports= Master;