(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('rookiesApp').factory(serviceId, ['common', datacontext]);

    function datacontext(common) {
        var $q = common.$q;

        var service = {
            getRoster: getPeople,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            var people = [
                { position: 'QB', firstName: 'Tony', lastName: 'Romo', team: 'Cowboys', byeWeek: 4, totalPoints: 0 },
                { position: 'RB', firstName: 'Adrian', lastName: 'Peterson', team: 'Vikings', byeWeek: 6, totalPoints: 0 },
                { position: 'WR', firstName: 'Dez', lastName: 'Bryant', team: 'Cowboys', byeWeek: 4, totalPoints: 0 },
                { position: 'TE', firstName: 'Jason', lastName: 'Witten', team: 'Cowboys', byeWeek: 4, totalPoints: 0 },
                { position: 'WR', firstName: 'Terrance', lastName: 'Williams', team: 'Cowboys', byeWeek: 4, totalPoints: 0 },
                { position: 'DEF', firstName: 'Seatle', lastName: 'Seahawks', team: 'Seahawks', byeWeek: 4, totalPoints: 0 }
            ];
            return $q.when(people);
        }
    }
})();