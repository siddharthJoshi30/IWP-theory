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
      success:(res, textStatus, jQxhr)=>{
        let district=res.district
        console.log(district)
        for(let i=0;i<10;i++){
          document.getElementById("district-"+i).innerHTML=district[i]
        }
      }

    })

  }
  
  const getMonthlyInfection=()=>{
    var state=document.getElementById("n1").value
    const data={
      state:state
    }
     const json_data=JSON.stringify(data)
    console.log(json_data)
    $.ajax({url:"http://localhost:3000/Infection",
      type:"POST",
      data:json_data,
      contentType: 'application/json',
      dataType:'json',
      success:(res, textStatus, jQxhr)=>{
       
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
      success:(res, textStatus, jQxhr)=>{
        
        document.getElementById("p1").innerHTML="Recovery:"+res.sum
      }

    })

  }
  


  



