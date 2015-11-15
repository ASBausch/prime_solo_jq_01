$(document).ready(function(){
	
//writes employee information to the DOM including removal button
	var displayEmployeeInfo= function(employee){

		var $container = $('<div>');

		for (var i = 0; i < employee.length; i++){
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

	};

	$('form').on('submit', function(event){
		event.preventDefault();
		newEmployee = $(this).serializeArray();
	
		console.log(newEmployee);

		displayEmployeeInfo(newEmployee);

	});


var currentEmployee = [];
	currentEmployee.push(new EmployeeCreator("Sherman", "Bausch", 1234, "Developer", 5, 10));
	currentEmployee.push(new EmployeeCreator("Amanda", "Bausch", 2234, "Student", 1, 1));
	currentEmployee.push(new EmployeeCreator("Elijah", "Bausch", 3334, "Pro Gamer", 5, 25));

	console.log(currentEmployee);

	});


 	function EmployeeCreator(firstname, lastname, empNum, title, lastRev, salary) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.empNum = empNum;
		this.title = title;
		this.lastRev = lastRev;
		this.salary = salary;
	};

		