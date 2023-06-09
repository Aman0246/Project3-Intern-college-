const express=require("express")
const routes=express.Router()
const {createIntern}=require("../controllers/InternControllers")
routes.post("/",createIntern)

module.exports=routes