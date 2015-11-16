//please refactor for brevity

var employeeArray = [];

$(document).ready(function(){
	
//writes employee information to the DOM including removal button
		var displayEmployeeInfo= function(employee){
//we need a container to hold each new employee information
		var $container = $('<div class="individual">');
//we need to loop through each employee object name/value pair 
//and set the value to display and add them to the DOM
		for (var i = 0; i < employee.length; i++){
//we need variables for the point in the employee array
//the element we will append and a remove button
	        var elem = employee[i];
			var $p =$('<p> ');
	        var $but = $('<button type="submit">Remove Employee</button>');

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
//we need to add specific classes to certain element values in 
//order to have them display a differnt color
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
//we need to add(append) the remove button to the last printed element
				(elem.name == "Salary"){
	         		$p.text(elem.name + ": " + "$" + elem.value);
	          		$container.append($p);
	          		$container.append($but);
	          	}
	          };
// we need to append the individual containers to an element in the DOM
		$container.appendTo('aside');
//we need the remove button to remove it's parent container
		$('button').on( "click", function() {
  			$(this).parent().remove();
		});
//the loop ends here
	};

//we need to create an event caller for the form
	$('form').on('submit', function(event){
		event.preventDefault();
//we create a serialized array to use in appending to the DOM		
		var newEmployee = $(this).serializeArray();
//function needs to take serialized array in and append DOM
		displayEmployeeInfo(newEmployee);
//creates a new employee object from serialized array
		var objectEmployee = new EmployeeCreator(newEmployee[0].value, newEmployee[1].value, newEmployee[2].value, newEmployee[3].value, newEmployee[4].value, newEmployee[5].value);
//push objects created to the employee array		
		employeeArray.push(objectEmployee);
//logs employee Array
		console.log(employeeArray);
	});

///leave everything above here alone

	function EmployeeCreator(firstname, lastname, empNum, title, lastRev, salary) {
		this["First Name"] = firstname;
		this["Last Name"] = lastname;
		this["Employee Number"]	= empNum;
		this["Title"] = title;
		this["Last Review"] = lastRev;
		this["Salary"] = salary;
	};

});



