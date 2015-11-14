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
	   		this.firstname = firstname;
	   		this.lastname = lastname;
	   		this.employeeNumber = empNum;
	   		this.title = title;
	   		this.lastReview = lastRev;
	   		this.salary = salary;
	   		};

		var employee = new Employee(firstname, lastname, empNum, title, lastRev, salary);

			console.log(employee);

			//return(employee);

		var $li =$('<li>');
		$li.text(employee.firstname + " " + employee.lastname);
		$('ul').append($li);

		});
});




	

	
		//function(employee){
		//		console.log('hello');
		//		var $li =$('<li>');
		//		$li.text("Name : " + employee.firstname);
		//		$('ul').append($li);
		//	};
