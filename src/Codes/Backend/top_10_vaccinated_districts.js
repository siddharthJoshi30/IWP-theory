const data=require('./ObjectCreation')
const express=require('express')
const router=express.Router()

const arr_vaccinated=[]
const arr_district=[]

//console.log(data.TamilNadu.length)

router.post('/districts' ,async(req,res)=>{
    try{
        const obj={state:req.body.state}    
        var temp_state=obj.state
            let j=0
            for(let i=0;i<data[temp_state].length;i++){
                if(data[temp_state][i].Date=="31-12-2020"){
                    arr_district[j]=data[temp_state][i].District_Name
                    arr_vaccinated[j]=data[temp_state][i].Recovered
                    j++
                }
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
            districts:arr_district,
            vaccinated:arr_vaccinated
        }
        return res.status(200).send(districts)

    }catch(e){
        res.status(400).send(e)
    }
    
})

module.exports=router
