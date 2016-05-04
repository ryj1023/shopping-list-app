$(document).ready(function(){
 		var counter = 0;
	$('#userInput').submit(function(){
		event.preventDefault();
		var something = $('#inputBox').val();
		
		//if no input, alert will come up
		if (something === ""){
			alert('Please enter an item for the list!')
		}
		//otherwise, the text is added as an li
		else{
			counter++;
			if(counter<=3){
				
			$('#list').append('<li class="items"> <img class="checked" src="check.png"> <span>' + something + '</span><img class="delete"  src="red-x.png"></li>' ); 	
			
			}
			

		}

			$('#userInput')[0].reset();
			
			console.log("counter", counter);
			console.log("val" , userInput);
		

		
	});

});

//delete and strikethrough code when checkbox and trashcan are clicked

assignlisteners();
function assignlisteners(){
	
	$('ul').on('click', '.delete', function() {
		console.log('delete clicked');
		$(this).closest('li').remove();
	});

	$('#list').on('click', '.items', function()

	{
		$('.checked').closest('li').show();	
		console.log('check clicked');
	});

		
}