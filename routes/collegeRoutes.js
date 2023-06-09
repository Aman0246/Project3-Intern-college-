const express=require("express")
const routes=express.Router()
const {createcolleges}=require("../controllers/collegeController")

routes.post("/",createcolleges)


module.exports=routes