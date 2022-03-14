const mongoose = require("mongoose");

const fixedschema= new mongoose.Schema(
    {
        account_number:{type:String, require:true, unique:true},
        balance:{type:Number},
      interestRate:{type:Number, require:true},
      startDate:{type:String, require:true},
      maturityDate:{type:String, require:true},

    },
    {
        versionKey:false,
        timestamps:true
    }

)

const Fixed=mongoose.model("fixed", fixedschema)
module.exports= Fixed;