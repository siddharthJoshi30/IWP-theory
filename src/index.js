const express=require('express')
const cors = require("cors")

const data=require('./Codes/Backend/ObjectCreation')
const monthlyInfectionRouter=require('./Codes/Backend/monthlyInfection')
const RecoveredCountRouter=require('./Codes/Backend/RecoveredCount')
const VaccinatedDistricts=require('./Codes/Backend/top_10_vaccinated_districts')


const app=express()
const port=process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(RecoveredCountRouter)
app.use(monthlyInfectionRouter)
app.use(VaccinatedDistricts)


app.listen(port,()=>{
    console.log("Listening at port 3000")
})