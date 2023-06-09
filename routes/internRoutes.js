const express=require("express")
const routes=express.Router()
const {check}=require("../controllers/InternControllers")
routes.get("/",check)

module.exports=routes