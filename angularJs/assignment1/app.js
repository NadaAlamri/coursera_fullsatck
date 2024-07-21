(function()
{
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope)
	{
		$scope.text="";
		$scope.msg ="";
		$scope.color ;
		$scope.bcolor ;
		$scope.border="solid" ;
		$scope.CheckFunc = function()
		{
			if($scope.text=="")
			{
				$scope.msg= "Please enter data first";
				$scope.bcolor="red";

				$scope.color = "red";
				return;
			}
			

			$scope.bcolor="green";

			var a= $scope.text.split(',');

			var filtered = a.filter(function (el) {
				return el != '';
			});

			if(filtered.length<=3)
			{
				$scope.msg = "Enjoy!";
				$scope.color = "Green";
			}
			else
			{
				$scope.msg ="Too much!";
				$scope.color = "red";

			}

		};
	}
})()