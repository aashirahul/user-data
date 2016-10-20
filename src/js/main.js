import $ from 'jquery';

function processData (object){
	var data = object.results;
	// console.log(data);
	 var i;
	 for(i=0;i<data.length;i++){
	 	var firstName = data[i].name.first.toUpperCase();
		var secondName = data[i].name.last.toUpperCase();
		var emailid = data[i].email.toUpperCase();
		var street =data[i].location.street;
		var city =data[i].location.city;
		var state =data[i].location.state;
		var zipcode =data[i].location.postcode;
		var cell = data[i].cell;
		var social = data[i].phone;
		var image = data[i].picture.large;
		$(".content").append(`<div class ="box">
								<div class="image" ><img class="style"src =${image}> </div>
				          	 	<div class="employee-details">
				            		<div class= "name"><span class="decoration">${firstName} ${secondName}<span></div>
				           		 	<div class="email"> ${emailid}</div>
				            		<div class="streetName"> ${street}</div>
				            		<div class="location">
				             			<div class="city ,"> ${city} </div>
						            	<div class="state ,"> ${state} </div>
						            	<div class="zip"> ${zipcode} </div>
				            		</div>
				            		<div class="cell"> ${cell} </div>
				           	    	<div class="social"> ${social}</div>
				          		</div>
				          	</div>`);


	 }
}
	



$.ajax({
  url: 'https://api.randomuser.me/?results=12',
  dataType: 'json',
  success: processData,
    
});