const mongoose = require("mongoose");

const branchschema= new mongoose.Schema(
    {
        name:{type:String, require:true},
        IFSC:{type:String},
    
        MICR:{type:Number, require:true},
    
        address:{type:String, require:true},
       
    },
    {
        versionKey:false,
        timestamps:true
    }

)

const Branch=mongoose.model("branch", branchschema)
module.exports= Branch;