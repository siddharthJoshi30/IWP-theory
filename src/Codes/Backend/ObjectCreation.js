const fs = require("fs") // Used for file systems-> for reading JSON file


const global_data = fs.readFileSync("D:\\Work\\Github-main\\IWP-Theory\\src\\Codes\\covid_19.json").toString()
const data = JSON.parse(global_data) // converting JSON->node.js object

module.exports=data //globally declaring data

