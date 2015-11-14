$(document).ready(function(){

	$('form#empForm').on('submit', function(event){
		event.preventDefault();
		var firstname = $('#firstname').val();
		var lastname = $('#lastname').val();
		var empNum = $('#employeenumber').val();
		var title = $('#title').val();
		var lastRev = $('#lastreview').val();
		var salary = $('#salary').val();

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

			return(employee);

		});

});
