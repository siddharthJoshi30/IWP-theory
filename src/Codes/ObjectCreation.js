const fs = require("fs");
// const path = require("path")
// const jsonpath = path.join(__dirname,"..","Codes","covid_19.json")

const global_data = fs.readFileSync("D:\\Work\\Github-main\\IWP-Theory\\src\\Codes\\covid_19.json").toString()
const data = JSON.parse(global_data)
//console.log(data.TamilNadu.length)
module.exports=data

//console.log(data)
//console.log(data.phoneNumbers[0].number)