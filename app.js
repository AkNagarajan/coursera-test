(function (){
   var app = angular.module('LunchCheck',[])
   app.controller('LunchCheckController',function($scope){

	$scope.itemList = "";
	var separator = ',';
	$scope.check = function(){

	$scope.customStyle = {};

	var stringArray = $scope.itemList;
	var splitArray = stringArray.split(',');

	if(splitArray.length <= 3  && stringArray.length > 0)
	{
		$scope.message = "Enjoy!";
		$scope.customStyle.style = {"color":"green"};
		$scope.customStyle.borderColor = {"border":"solid 1px green"};
	}
	else if(splitArray.length > 3)
	{
		$scope.message = "Too much!";
		$scope.customStyle.style = {"color":"green"};
		$scope.customStyle.borderColor = {"border":"solid 1px green"};

	}
	else if(stringArray.length == 0)
	{
		$scope.message = "Please enter data first";
		$scope.customStyle.style = {"color":"red"};
		$scope.customStyle.borderColor = {"border":"solid 1px red"};
	}
	else{}
	}

   });

})();
