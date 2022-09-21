const data=require('./ObjectCreation')
var sum=0

function displayMonthly(){
    for(let i=0;i<data.TamilNadu.length;i++)
    {
        sum+=data.TamilNadu[i].Infected
    }
    return sum
}
module.exports=displayMonthly()

