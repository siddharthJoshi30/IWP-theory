const getDistricts = () => {
  var state = document.getElementById("n1").value
  const data = {
    state: state
  }
  const json_data = JSON.stringify(data)
  console.log(json_data)
  $.ajax({
    url: "http://localhost:3000/districts",
    type: "POST",
    data: json_data,
    contentType: 'application/json',
    dataType: 'json',
    success: (res) => {

        districtName = res.districts
        vaccinatePeople = res.vaccinated

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

        var div = document.getElementById("district-0");
        div.appendChild(table);

      //}
    }

  })

}
  
  const getMonthlyInfectionRecovery=()=>{

    var state=document.getElementById("n1").value
    const data=JSON.stringify({state})
    
    $.ajax({
      url:"http://localhost:3000/infectionRecovery",
      type:"POST",
      data,
      contentType: 'application/json',
      dataType:'json',
      success:(res)=>{
        let monthlyInfection=res.sum
        let monthlyRecovery=res.sum1
        document.getElementById("p1").innerHTML="Infection:"+res.sum+"Recovery:"+res.sum1
      }
    })
  }

  // const getRecoveries=()=>{
  //   var state=document.getElementById("n1").value
  //   const data={
  //     state:state
  //   }
  //    const json_data=JSON.stringify(data)
  //   console.log(json_data)
  //   $.ajax({url:"http://localhost:3000/Recovery",
  //     type:"POST",
  //     data:json_data,
  //     contentType: 'application/json',
  //     dataType:'json',
  //     success:(res)=>{
        
  //       document.getElementById("p1").innerHTML="Recovery:"+res.sum
  //     }

  //   })

  // }
  


  



