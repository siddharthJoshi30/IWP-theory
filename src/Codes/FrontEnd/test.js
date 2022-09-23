/*const getMonthlyInfections = ()=>{
  const name = document.getElementById("n1").value 
  const obj = {
    name:name
  }
  //console.log(obj)
  fetch("http://localhost:3000/sample", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById("p1").innerHTML=data.name+""
  })
  .catch(error => {
  });

}*/


  const getMonthlyInfections=()=>{
    var state=document.getElementById("n1").value
    const data={
      state:state
    }
     const json_data=JSON.stringify(data)
    console.log(json_data)
    $.ajax({url:"http://localhost:3000/sample",
      type:"POST",
      data:json_data,
      contentType: 'application/json',
      dataType:'json',
      success:(res, textStatus, jQxhr)=>{
        // console.log( JSON.stringify( data ) );
        document.getElementById("p1").innerHTML="Count value is:"+res.district
      }

    })

  }
  

