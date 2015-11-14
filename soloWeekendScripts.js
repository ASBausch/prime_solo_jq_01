$(document).ready(function(){
		
	$('form#empForm').on('submit', function(event){
		event.preventDefault();
		firstname = $('#firstname').val();
		lastname = $('#lastname').val();
		empNum = $('#employeenumber').val();
		title = $('#title').val();
		lastRev = $('#lastreview').val();
		salary = $('#salary').val();

		function Employee(firstname, lastname, empNum, title, lastRev, salary) {
	   		this["First Name"] = firstname;
	   		this["Last Name"] = lastname;
	   		this["Employee Number"] = empNum;
	   		this["Title"] = title;
	   		this["Last Review Rating"]= lastRev;
	   		this["Current Salary"] = salary;
	   		};

		
		var employee = new Employee(firstname, lastname, empNum, title, lastRev, salary);

		for (var key in employee) {
		var $p =$('<p>');
		$p.text(key + " : " + employee[key]);
		$('aside').append($p);
		};

		console.log(employee);
		});
});




	

	
		//function(employee){
		//		console.log('hello');
		//		var $li =$('<li>');
		//		$li.text("Name : " + employee.firstname);
		//		$('ul').append($li);
		//	};
