const data=require('./ObjectCreation')
const express=require('express')
const router=express.Router()



router.post('/Recovery' ,async(req,res)=>{
    try {
        const obj = { state: req.body.state }
        const temp_state=obj.state

        var sum = 0
        for(let i=0;i<data[temp_state].length;i++)
        {
            sum=sum+parseInt(data[temp_state][i].Recovered)
        }
       
        return res.status(200).send({sum})

    } catch(e){
        res.status(400).send(e)
    }
})

module.exports=router
