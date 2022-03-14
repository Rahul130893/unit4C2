const express=require("express")
const User = require("../models/user")
const Master=require("../models/masterAccount")


const app=express()

app.get("/", async (req, res)=>{
    try {
        
        
    } catch (error) {
        return res.status(500).send({message: error.message})
        
    }
})