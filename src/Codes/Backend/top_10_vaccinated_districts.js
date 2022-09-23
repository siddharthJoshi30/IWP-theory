const data=require('./ObjectCreation')
const express=require('express')
const router=express.Router()

const arr_vaccinated=[]
const arr_district=[]

//console.log(data.TamilNadu.length)

router.post('/sample' ,async(req,res)=>{
    var sum=0
    const obj={
        state:req.body.state
    }
    var temp_state=obj.state
    for(let i=0;i<data[temp_state].length;i++)
    {
        arr_vaccinated[i]=data[temp_state][i].Vaccinated
        arr_district[i]=data[temp_state][i].District_Name
    }   
    for(let i=0;i<data[temp_state].length-1;i++)
    {
        for(let j=0;j<data[temp_state].length-1;j++)
        {
            if(arr_vaccinated[j]<arr_vaccinated[j+1])
            {
                let temp=arr_vaccinated[j]
                arr_vaccinated[j]=arr_vaccinated[j+1]
                arr_vaccinated[j+1]=temp

                let temp2=arr_district[j]
                arr_district[j]=arr_district[j+1]
                arr_district[j+1]=temp2
            }
        }
    }
    const districts={
        district:arr_district[0]
    }
    return res.send(districts)
    return arr_district[0]
})

module.exports=router
