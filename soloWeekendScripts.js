$(document).ready(function(){
	//retireveing form data in order to create new employee objects	

	$('form').on('submit', function(event){
		event.preventDefault();
		employees = $(this).serializeArray();
	
		console.log(employees);

		var $container = $('<div>');
		
		//we need proper syntax and classes for our properties	
		
		for (var i = 0; i < employees.length; i++){
	        var elem = employees[i];
			var $p =$('<p class="gone"> ');
	        var $but = $('<button type="button">Remove Employee</button>');

	        if (elem.name=="First Name"){
	        	$p.text(elem.name + ": " + elem.value);
	        		// Append the property to the wrapper
	        	$container.append($p);
			 } else if 
			 	(elem.name=="Last Name"){
			 		$p.text(elem.name + ": " + elem.value);
			 		$container.append($p);
			 } else if
			 	(elem.name=="Employee Number"){
			 		$p.text(elem.name + ": " + elem.value);
			 		$container.append($p);
			 } else if
			 	(elem.name=="Title"){
			 		$p.text(elem.name + ": " + elem.value);
			 		$container.append($p);
			 } else if
			 	(elem.name == "Last Review" && elem.value == 1){
					$p.text(elem.name + ": " + elem.value).addClass('one');
					$container.append($p);
			 } else if
			 	(elem.name == "Last Review" && elem.value == 2){
					$p.text(elem.name + ": " + elem.value).addClass('two');
					$container.append($p);
			 } else if 
			 	(elem.name == "Last Review" && elem.value == 3){
					$p.text(elem.name + ": " + elem.value).addClass('three');
					$container.append($p);
			 } else if
			 	(elem.name == "Last Review" && elem.value == 4){
					$p.text(elem.name + ": " + elem.value).addClass('four');
					$container.append($p);
			 } else if 
			 	(elem.name == "Last Review" && elem.value == 5){
					$p.text(elem.name + ": " + elem.value).addClass('five');
					$container.append($p);
			 } else if 
				(elem.name == "Salary"){
	         		$p.text(elem.name + ": " + "$" + elem.value);
	          		$container.append($p);
	          		$container.append($but);
	          	}
	          };
	          // Append the wrapper to the DOM

		$container.appendTo('aside');


		$('button').on( "click", function() {
  			$(this).parent().remove();
		});

	});

});

		