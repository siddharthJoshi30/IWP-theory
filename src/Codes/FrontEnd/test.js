  const getDistricts=()=>{
    var state=document.getElementById("n1").value
    const data={
      state:state
    }
     const json_data=JSON.stringify(data)
    console.log(json_data)
    $.ajax({url:"http://localhost:3000/districts",
      type:"POST",
      data:json_data,
      contentType: 'application/json',
      dataType:'json',
      success:(res)=>{
        let districts=res.districts
        let vaccinated=res.vaccinated
        
        for(let i=0;i<10;i++){
          document.getElementById("district-"+i).innerHTML=districts[i]+":"+vaccinated[i]
          
        }
      }

    })

  }
  
  const getMonthlyInfection=()=>{

    var state=document.getElementById("n1").value
    const data=JSON.stringify({state})
    
    $.ajax({
      url:"http://localhost:3000/infection",
      type:"POST",
      data,
      contentType: 'application/json',
      dataType:'json',
      success:(res)=>{
        document.getElementById("p1").innerHTML="Infection:"+res.sum
      }
    })
  }

  const getRecoveries=()=>{
    var state=document.getElementById("n1").value
    const data={
      state:state
    }
     const json_data=JSON.stringify(data)
    console.log(json_data)
    $.ajax({url:"http://localhost:3000/Recovery",
      type:"POST",
      data:json_data,
      contentType: 'application/json',
      dataType:'json',
      success:(res)=>{
        
        document.getElementById("p1").innerHTML="Recovery:"+res.sum
      }

    })

  }
  


  



