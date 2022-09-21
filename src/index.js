const express=require('express')
const data=require('./Codes/ObjectCreation')
const districts=require('./Codes/top_10_vaccinated_districts')
const monthlyInfections=require('./Codes/monthlyInfection')
const RecoveredCount=require('./Codes/RecoveredCount')
const app=express()
const port=3000
app.use(express.json())
app.get('/json_practice',async(req,res)=>{
    res.send("Count is "+ monthlyInfections)
})
app.listen(port,()=>{
    console.log("Listening at port 3000")
})