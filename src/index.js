const express=require('express')
const cors = require("cors")

const data=require('./Codes/Backend/ObjectCreation')
//const monthlyInfections=require('./Codes/Backend/monthlyInfection')
const monthlyInfectionRouter=require('./Codes/Backend/monthlyInfection')
//const RecoveredCountRouter=require('./Codes/Backend/RecoveredCount')
const VaccinatedDistricts=require('./Codes/Backend/top_10_vaccinated_districts')


const app=express()
const port=3000

app.use(cors())
app.use(express.json())
//app.use(RecoveredCountRouter)
//app.use(monthlyInfectionRouter)
app.use(VaccinatedDistricts)


/*app.get('/json_practice',async(req,res)=>{
    console.log(monthlyInfections)
    res.send("Count is "+ monthlyInfections)
})*/
/*app.post('/sample',async(req,res)=>{
    console.log(req.body)
    const obj={
        state:req.body.state
    }
    return res.send(obj)
})*/
app.listen(port,()=>{
    console.log("Listening at port 3000")
})