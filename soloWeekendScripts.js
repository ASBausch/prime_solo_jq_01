//please refactor for brevity

function EmployeeCreator(firstName, lastName, empNum, jobTitle, lastRev, salary) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.empNum = empNum;
		this.jobTitle = jobTitle;
		this.lastRev = lastRev;
		this.salary = salary;
};

$(document).ready(function() {

	//create template for displaying employee information
	var employeeTemplate = $('#employee-list').html();

	//compile the template
	var theTemplate = Handlebars.compile(employeeTemplate);

	var employeeArray = [];

//we need to create an event caller for the form
	$('form').on('submit', function(event){
			event.preventDefault();
//we create a serialized array from form data
			var newEmployee = $(this).serializeArray();
//creates a new employee object from serialized array
			var objectEmployee = new EmployeeCreator(newEmployee[0].value, newEmployee[1].value, newEmployee[2].value, newEmployee[3].value, newEmployee[4].value, newEmployee[5].value);
//push objects created to the employee array
			employeeArray.push(objectEmployee);
//logs employee Array
			var compiledHtml = theTemplate({employees: employeeArray});
			$('aside').html(compiledHtml);
			console.log(employeeArray);
			});
		});

			$('aside').on('click', 'button', function(){
				$(this).parent().remove();
	});
