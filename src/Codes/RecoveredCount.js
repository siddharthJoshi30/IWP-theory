const data=require('./ObjectCreation')
var sum=0
function displayRecovered(){
    for(let i=0;i<data.TamilNadu.length;i++)
    {
        sum+=data.TamilNadu[i].Recovered
    }
    return sum
}
module.exports=displayRecovered()
