const express = require('express')
const data = require('./ObjectCreation')

const router = express.Router();

router.post('/infectionRecovery', async (req, res) => {
    try {
        
        var sum=0,sum1=0
        const obj={state:req.body.state}    
        var temp_state=obj.state
        for(let i=0;i<data[temp_state].length;i++)
        {
            sum=sum+parseInt(data[temp_state][i].Infected)
            sum1=sum1+parseInt(data[temp_state][i].Recovered)

        }
        
        const Sum={
            sum,
            sum1
        }
        return res.status(200).send(Sum)

    } catch(e){
        res.status(400).send(e)
    }
})



module.exports = router


