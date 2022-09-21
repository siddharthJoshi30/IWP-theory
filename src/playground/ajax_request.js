$.ajax({ 
	url: "/practice_playground", 
	data: { value: $('.mytext').val() }, 
	method: "GET", 
	success: (data) => { 
		console.log(data) 
		// outputs "SUCESSSSS" 
	} 
});