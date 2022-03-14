const express=require("express")
const mongoose=require("mongoose")

const app=express();

app.use(express.json())

const User=require("./model/user.js")
const Branch=require("./model/branchDetails.js")
const Fixed=require("./model/fixedAccount.js")
const Master=require("./model/masterAccount.js")
const Savings=require("./model/savingsAccount.js")



const connect=require("./configs/db.js")



app.listen(5000, async()=>{
    try {
        await connect()
        
    } catch (error) {
        console.log(error)
    }
    console.log("listening at 5000")
})