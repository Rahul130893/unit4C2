const express=require("express")
const mongoose=require("mongoose")

const app=express();

app.use(express.json())

const usercont=require("./controllers/user.cont")
const branchcont=require("./controllers/branchDetails.cont")
const fixedcont=require("./controllers/fixedAccount.cont")

const mastercont=require("./controllers/masterAccount.cont")
const savingscont=require("./controllers/savingsAccount.cont")

const User=require("./model/user.js")
const Branch=require("./model/branchDetails.js")
const Fixed=require("./model/fixedAccount.js")
const Master=require("./model/masterAccount.js")
const Savings=require("./model/savingsAccount.js")

app.use("/user", usercont )
app.use("/branch", branchcont)
app.use("/fixed", fixedcont)

app.use("/master", mastercont)

app.use("/savings", savingscont)

const connect=require("./configs/db.js")



app.listen(5000, async()=>{
    try {
        await connect()
        
    } catch (error) {
        console.log(error)
    }
    console.log("listening at 5000")
})