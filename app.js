var app = angular.module('myApp', []);
		app.controller('mainCtrl', function($scope) {
		  var vm = this;
		  vm.submitForm = function() {
		  	vm.submitted = true;
		    if(vm.myForm.$invalid){
		    	// return false;	
		    } else{
		    	// do whatever you want	
		    	alert('Form is valid');
		    }
		  };
		});