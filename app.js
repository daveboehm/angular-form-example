angular.module('app', [])

	.controller('formValidationController', function($scope){
		$scope.passwordConfirmation = function() {
			if ($scope.user.password !== $scope.user.passwordconfirm) {
				$scope.user.matched = false;
				
			} else {
				$scope.user.matched = true;
			}
			return $scope.user.matched;
		}
	})
	
// ============================================================================
;