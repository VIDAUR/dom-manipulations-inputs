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
var imgContainer = document.querySelector('.img-box')
    var data = document.querySelector('.selection')
    var model = document.querySelector('.model')
    var msrp = document.querySelector('.msrp')
    var mpg = document.querySelector('.mpg')
    var edmund = document.querySelector('.edmunds')
    var optionArray = document.querySelectorAll('option')


    for (var i = 0; i < optionArray.length; i++) {

      if(data.selectedIndex === 0 && optionArray[i].value === "Mini Cooper"){
        imgContainer.innerHTML = "<img src='images/"+ optionArray[i].dataset.img + "'></img>"
        model.textContent = optionArray[i].value
        msrp.textContent = optionArray[i].dataset.msrp
        mpg.textContent = optionArray[i].dataset.mpg
        edmund.textContent = optionArray[i].dataset.edmunds

      } else if (data.selectedIndex == 1 && optionArray[i].value === "Mazda 3" )  {
        imgContainer.innerHTML = "<img src='images/"+ optionArray[i].dataset.img + "'></img>"
        model.textContent = optionArray[i].value
        msrp.textContent = optionArray[i].dataset.msrp
        mpg.textContent = optionArray[i].dataset.mpg
        edmund.textContent = optionArray[i].dataset.edmunds

      }else if (data.selectedIndex == 2 && optionArray[i].value === "Dodge Charger") {
        imgContainer.innerHTML = "<img src='images/"+ optionArray[i].dataset.img + "'></img>"
        model.textContent = optionArray[i].value
        msrp.textContent = optionArray[i].dataset.msrp
        mpg.textContent = optionArray[i].dataset.mpg
        edmund.textContent = optionArray[i].dataset.edmunds
      }
    }

})
  
  
