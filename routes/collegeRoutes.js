const express=require("express")
const routes=express.Router()
const {check}=require("../controllers/collegeController")

routes.get("/",check)

module.exports=routes