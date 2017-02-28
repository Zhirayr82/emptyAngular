// MAIN CONTROLLER
function mainController($scope) {
	$scope.currentPersonId = -1;
	$scope.person = [];
	$scope.addPerson = function () {
		$scope.person.push({
			id: $scope.person.length+1,
			lastName: $scope.lastName,
			firstName: $scope.firstName,
			mail: $scope.mail
		}); 
	};
	$scope.deletePerson = function(id) {
		$scope.person.splice( id, 1 );
	}
}
