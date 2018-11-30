document.querySelector("#reset-field-btn").addEventListener('click', function(){
// TASK #1
    document.querySelector(".ex1-text").value = "";
      
  })


document.querySelector("#validate-field-btn").addEventListener('click',function(){
  // TASK #2
	
	var text = document.querySelector(".ex2-text");
	var	length = text.value.length;

	if( length < 6){
		document.querySelector(".flash-message").textContent = "Input not long enough"
		document.querySelector(".flash-message").classList.add("invalid")
		document.querySelector(".flash-message").classList.remove("valid")

		} else{
		document.querySelector(".flash-message").textContent = "Fiel valid"
		document.querySelector(".flash-message").classList.add("valid")
		document.querySelector(".flash-message").classList.remove("invalid")
	}
  
})


document.querySelector("#calculate-items-btn").addEventListener('click', function(){
  // TASK #3

  	var sum = 0;
  	var box = document.querySelectorAll(".item-input")

  	for(i=0; i<box.length; i++){
  		if(box[i].checked === true){
  			sum = sum + parseInt(box[i].value)
  		}
  	}
  	document.querySelector(".sum-total").textContent = "$" + sum
})


document.querySelector("#select-to-show-more-btn").addEventListener('click', function(){
  // TASK #4

  
})
