const express = require('express')
const data = require('./ObjectCreation')

const router = express.Router();

router.post('/infection', async (req, res) => {
    try {
        const obj = { state: req.body.state } 
        var sum = 0
        const temp_state=obj.state
       
        for(let i=0;i<data[temp_state].length;i++)
        {
            sum=sum+parseInt(data[temp_state][i].Infected)
        }
        return res.status(200).send({sum})

    } catch(e){
        res.status(400).send(e)
    }
})



module.exports = router


