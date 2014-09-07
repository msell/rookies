(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('rookiesApp').factory(serviceId, ['$http','common', datacontext]);

    function datacontext($http, common) {
        var $q = common.$q;

        var service = {
            getRoster: getPeople,
            getMessageCount: getMessageCount,
            getLeague: getLeague
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

        function getLeague() {
            var url = 'http://football4.myfantasyleague.com/2014/export/export?TYPE=league&L=13040&W=&JSON=1&F=0012&callback=JSON_CALLBACK';

            return $q.when($http.jsonp(url).success(function(data){
                console.log(data);
            }).error(function(data, status){
                console.log(status);
            }));
        }

    }
})();