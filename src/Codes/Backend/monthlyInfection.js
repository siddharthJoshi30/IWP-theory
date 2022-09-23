const data=require('./ObjectCreation')
const express = require('express');
const router = express.Router();


router.post('/sample',async(req,res)=>{
    var sum=0
    const obj={
        state:req.body.state
    }
    var temp_state=obj.state
   
    for(let i=0;i<data[temp_state].length;i++){
        sum+=data[temp_state][i].Infected
    }
    const Sum={
        sum:sum
    }
    return res.send(Sum)
})
module.exports=router
/*function displayMonthly(){
    for(let i=0;i<data.TamilNadu.length;i++)
    {
        sum+=data.TamilNadu[i].Infected
    }
    return sum
}*/
//module.exports=displayMonthly()

