(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('rookiesApp').factory(serviceId, ['$http','common', datacontext]);

    function datacontext($http, common) {
        var $q = common.$q;

        var service = {
            getRoster: getPeople,
            getMessageCount: getMessageCount,
            getTeam: getTeam
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

        function getTeam() {
            var url = 'http://whoshouldibench.herokuapp.com/mfl_rosters/1?league=13040&roster=Dumb%20Punts&callback=JSON_CALLBACK';

            return $q.when($http.jsonp(url).success(function(data){
                console.log(data);
            }).error(function(data, status){
                console.log(status);
            }));
        }

    }
})();