$(document).ready(function(){
	//retireveing form data in order to create new employee objects	
	$('form').on('submit', function(event){
		event.preventDefault();
		var employees = $(this).serializeArray();
		
	//adding punctuation for listing Object properties		
		for (var i = 0; i < employees.length; i++){
        var elem = employees[i];
        var $p =$('<p>');
        var $but = $('<button type="button">Remove Employee</button>');
        if (elem.name === "Salary"){
          var $p = $('<p>');
          $p.text(elem.name + ": " + "$" + elem.value);
          $('aside').append($p);
          $('p:last').append($but);
         }else{
		  $p.text(elem.name + ": " + elem.value);
		  $('aside').append($p);
		}
       }
       console.log(employees);
      });


	});

		
		//firstname = $('#firstname').val();
		//lastname = $('#lastname').val();
		//empNum = $('#employeenumber').val();
		//title = $('#title').val();
		//lastRev = $('#lastreview').val();
		//salary = $('#salary').val();
	//creates and object creator in order to add detailed employee
	//information to the dom
//		function Employee(firstname, lastname, empNum, title, lastRev, salary) {
//	   		this["First Name"] = firstname;
//	   		this["Last Name"] = lastname;
//	   		this["Employee Number"] = empNum;
//	   		this["Title"] = title;
//	   		this["Last Review Rating"]= lastRev;
//	   		this["Current Salary"] = salary;
//	   		};

	//creating employee objects from form input for input into dom	
		//var employee = new Employee(firstname, lastname, empNum, title, lastRev, salary);
//		var array = [];
//
//		array.push(new Employee(firstname, lastname, empNum, title, lastRev, salary))
//
//		console.log(array);
//
//		var employee = new Employee(firstname, lastname, empNum, title, lastRev, salary)
//
//		for (var key in employee) {
//		var $p =$('<p>');
//		var $but = $('<button type="button">Remove Employee</button>');
//
//		if(key === "Current Salary"){
//			$p.text(key + ": " + "$"+ employee[key]);
//			$('aside').append($p);
//			$('p:last').append($but);
//
//			}else{
//
//			$p.text(key + ": " + employee[key]);
//			$('aside').append($p);
//			}
//		};
//
//		console.log(employee);
//		});
//});





	