'use strict';

//
// The loginToolbar directive is a reusable widget that can show login or logout buttons
// and information the current authenticated user
//
module.exports = ['security', function(security) {
	var directive = {
		// TODO: add variable for 'static/' bit below
		// templateUrl: 'static/common/security/login/toolbar.html',
		templateUrl: 'common/security/login/toolbar.html',
		restrict: 'E',
		replace:	true,
		scope:		true,
		link: function($scope, $element, $attrs, $controller) {
			$scope.isAuthenticated = security.isAuthenticated;
			$scope.login	= security.showLogin;
			$scope.logout = security.logout;
			$scope.$watch(function() {
				return security.currentUser;
			}, function(currentUser) {
				$scope.currentUser = currentUser;
			});
		}
	};
	return directive;
}];
