(function () {
    'use strict';
    var controllerId = 'league';
    angular.module('rookiesApp').controller(controllerId, ['common', 'datacontext', dashboard]);

    function dashboard(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.leagueName = "Rookies report to camp";
        vm.league = {};
        vm.messageCount = 0;
        vm.league = {};
        vm.title = 'League';
        activate();

        function activate() {
            var promises = [getLeague()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated League View'); });
        }

        function getLeague() {
            return datacontext.getLeague().then(function(data) {
                return vm.league = data;
            });
        }
    }
})();