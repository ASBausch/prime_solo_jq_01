$(document).ready(function(){
	
//writes employee information to the DOM including removal button
	var displayEmployeeInfo= function(employee){


//we need a container to hold each new employee information
		var $container = $('<div>');


//we need to loop through each employee object name/value pair 
//and set the value to display and add them to the DOM
		for (var i = 0; i < employee.length; i++){
//we need variables for the point in the employee array
//the element we will append and a remove button
	        var elem = employee[i];
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


//we need to take the data the is input into the form and store 
//it in an object that can be called in our display function
	$('form').on('submit', function(event){
		event.preventDefault();
		newEmployee = $(this).serializeArray();
	
		console.log(newEmployee);

		displayEmployeeInfo(newEmployee);

	});


//we need to create employee objects that can be automaticlly written
//to the page then push them into an array that can be fed to the display
//function

var currentEmployee = [];
	currentEmployee.push(new EmployeeCreator("Sherman", "Bausch", 1234, "Developer", 5, 10));
	currentEmployee.push(new EmployeeCreator("Amanda", "Bausch", 2234, "Student", 1, 1));
	currentEmployee.push(new EmployeeCreator("Elijah", "Bausch", 3334, "Pro Gamer", 5, 25));

	console.log(currentEmployee);

	});

//these need to be refactored to match the form fields
//then try serializeArray
 	function EmployeeCreator(firstname, lastname, empNum, title, lastRev, salary) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.empNum = empNum;
		this.title = title;
		this.lastRev = lastRev;
		this.salary = salary;
	};

		