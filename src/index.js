const express=require('express') // Express library stored in express variable
const cors = require("cors") // Cors used for cross origin resource sharing between FrontEnd and Backend 


// Data->JSON converted to JS object
// monthlyInfectionRouter->Router for 1st API
// VaccinatedDistricts->Route for 2nd API

const data=require('./Codes/Backend/ObjectCreation')
const monthlyInfectionRecoveryRouter=require('./Codes/Backend/monthlyInfectionRecovery')
const VaccinatedDistricts=require('./Codes/Backend/top_10_vaccinated_districts')


const app=express()
const port=process.env.PORT || 3000 //Assingning Port number for Server

app.use(cors())
app.use(express.json())
app.use(monthlyInfectionRecoveryRouter)
app.use(VaccinatedDistricts)


// Server starts Executing at port nuber 3000
app.listen(port,()=>{
    console.log("Listening at port 3000")
})