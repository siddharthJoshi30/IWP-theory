
//function to get the districts from server
const getDistricts = () => {
  var state = document.getElementById("state").value //Getting client side input 
  const data = {
    state: state
  }
  const json_data = JSON.stringify(data) //Coverting to JSON
  
  // Sending AJAX request to server at Router 'districts'
  $.ajax({
    url: "http://localhost:3000/districts",
    type: "POST",
    data: json_data,
    contentType: 'application/json',
    dataType: 'json',
    success: (res) => { //res->response received from server

        districtName = res.districts
        vaccinatePeople = res.vaccinated

        //Creating table and inserting record

        var table = document.createElement("table")
        var tr = table.insertRow(-1)

        var th = document.createElement("th")
        th.innerHTML = 'District'
        tr.appendChild(th)

        var th = document.createElement("th")
        th.innerHTML = 'No of Vaccinated people'
        tr.appendChild(th)

        for (var i = 0; i < 10; i++) {
          var tr = table.insertRow(-1)

          var cell = tr.insertCell(-1)
          cell.innerHTML = districtName[i]

          var cell = tr.insertCell(-1)
          cell.innerHTML = vaccinatePeople[i]
        }

        var div = document.getElementById("display") //Displaying Response in HTML page
        div.appendChild(table)
    }

  })

}
  

//function to get Monthly Infections and Recoveries from server

const getMonthlyInfectionRecovery=()=>{

  var state=document.getElementById("state").value
  const data=JSON.stringify({state}) //Converting to JSON
  
  // Sending AJAX request to server at Router 'infectionRecovery
  
  $.ajax({
    url:"http://localhost:3000/infectionRecovery",
    type:"POST",
    data,
    contentType: 'application/json',
    dataType:'json',
    success:(res)=>{
      var table = document.createElement("table")
      var tr = table.insertRow(-1)
      var tr = table.insertRow(-1)
      var cell = tr.insertCell(-1)
    
      cell.innerHTML = "No of people infected in December 2020"

      var cell = tr.insertCell(-1)
      cell.innerHTML = res.sum

      var tr = table.insertRow(-1)

      var cell = tr.insertCell(-1)
      cell.innerHTML = "No of people recovered in December 2020"

      var cell = tr.insertCell(-1)
      cell.innerHTML = res.sum1

      var div = document.getElementById("display") //Displaying Response on HTML page
      div.appendChild(table)

    }
  })
}
  


  



