'use strict';

//
// This service provides guard methods to support AngularJS routes.
// You can add them as resolves to routes to require authorization levels
// before allowing a route change to complete
//
module.exports = {

	$get: ['security', 'retryQueue', function(security, queue) {
		var service = {

			//
			// Require that there be an authenticated user
			// (use this in a route resolve to prevent non-authenticated users from entering that route)
			//
			requireAuthenticatedUser: function() {
				var promise = security.requestCurrentUser().then(function(userInfo) {
					if ( !security.isAuthenticated() ) {
						return queue.pushRetryFn('unauthenticated-client', service.requireAuthenticatedUser);
					}
				});
				return promise;
			},
		};

		return service;
	}]
};
