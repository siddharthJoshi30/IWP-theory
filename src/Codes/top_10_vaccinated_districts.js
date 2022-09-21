const data=require('./ObjectCreation')
const arr_vaccinated=[]
const arr_district=[]
//console.log(data.TamilNadu.length)

function VaccinatedDistricts(){
    for(let i=0;i<data.TamilNadu.length;i++)
    {
        arr_vaccinated[i]=data.TamilNadu[i].Vaccinated
        arr_district[i]=data.TamilNadu[i].District_Name
    }   
    for(let i=0;i<data.TamilNadu.length-1;i++)
    {
        for(let j=0;j<data.TamilNadu.length-1;j++)
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
    return arr_district
}
module.exports=VaccinatedDistricts()
