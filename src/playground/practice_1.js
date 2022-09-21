const express=require('express')

const app=express()
const port=3010
app.get('/practice_playground',async(req,res)=>{
    var text=req.body.value
    res.send("text is "+text)
})
app.listen(port,()=>{
    console.log("Listening at port 3010")
})