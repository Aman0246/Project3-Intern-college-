const express=require("express")
const app=express()
const mongoose=require("mongoose")
app.use(express.json())
require("dotenv").config()
mongoose.connect(process.env.MONGOCONNECT).then(()=>console.log("Database is connected....")).catch(()=>console.log("dataBase is not Connectd  ****"))
const collegerRoute=require("./routes/collegeRoutes")
const internRoute=require("./routes/internRoutes")
const {collegeDetails}=require("./controllers/collegeController")

app.use("/functionup/colleges",collegerRoute)
app.use("/functionup/interns",internRoute)
app.get("/functionup/collegeDetails",collegeDetails)


app.listen(process.env.PORT,()=>{
    console.log(`surver is running at ${process.env.PORT}`)
})