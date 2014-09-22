(function () {
    'use strict';

    angular.module('rookiesConfig', ['controllers.main', 'services.config'])

    var app = angular.module('rookiesApp', [
        // Angular modules
        'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)

        // Custom modules
        'common',           // common functions, logger, spinner
        'common.bootstrap', // bootstrap dialog wrapper functions

        // 3rd Party Modules
        'ui.bootstrap',      // ui-bootstrap (ex: carousel, pagination, dialog)
        'services.config'
    ]);

    // Handle routing errors and success events
    app.run(['$route',  function ($route) {
        // Include $route to kick start the router.
    }]);
})();
