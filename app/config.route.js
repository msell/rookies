(function () {
    'use strict';

    var app = angular.module('rookiesApp');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/dashboard' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/dashboard',
                config: {
                    templateUrl: 'dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }, {
                url: '/team',
                config: {
                    title: 'team',
                    templateUrl: 'team/team.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-male"></i> Team'
                    }
                }
            }, {
                url: '/admin',
                config: {
                    title: 'admin',
                    templateUrl: 'admin/admin.html',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }
                }
            }
        ];
    }
})();