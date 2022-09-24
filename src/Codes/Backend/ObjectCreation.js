const fs = require("fs");


const global_data = fs.readFileSync("D:\\Work\\Github-main\\IWP-Theory\\src\\Codes\\covid_19.json").toString()
const data = JSON.parse(global_data)

module.exports=data

