const express = require('express')
const data = require('./ObjectCreation')

const router = express.Router(); // Creating a Router

//API Creation at Router '/infectionRecovery'

router.post('/infectionRecovery', async (req, res) => {
    try {
        const obj={state:req.body.state} //User Input from Client-Side 
        var sum=0,sum1=0
        var temp_state=obj.state

        //Calculating total monthly and recovered count

        for(let i=0;i<data[temp_state].length;i++)
        {
            sum=sum+parseInt(data[temp_state][i].Infected)
            sum1=sum1+parseInt(data[temp_state][i].Recovered)

        }
        
        const Sum={
            sum,
            sum1
        }
        return res.status(200).send(Sum) //Sending response back to client in JS Object

    } catch(e){
        res.status(400).send(e)
    }
})


module.exports = router //Globally Exporting router


