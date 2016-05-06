(function(){
    angular.module('angularytics').factory('AngularyticsTrackingHandler', function($log, $http, $rootScope, WEBSERVICE_PATH) {
        var service = {};

        service.trackPageView = function(url) {
           // console.log("TRACK: URL visited", url);
        };

        service.trackEvent = function(category, action, opt_label, opt_value, opt_noninteraction) {
            console.log("TRACK: Event: ", category, action, opt_label, opt_value, opt_noninteraction);


        // $insert = $database->track_click($_GET['session_id'], $_GET['trial_sponsor'], $_GET['interaction_label'], $_GET['email_address']);


             queryString = WEBSERVICE_PATH +"_php_processors/main-database-interface.php?query=track_click&interaction_label=" + category + action +"&email_address="+$rootScope.$storage.selection["email"] + "&session_id="+$rootScope.$storage.sessionID;

             console.log(queryString);
        //     Angularytics.trackEvent("meta ID:", $rootScope.searchProperties["meta_id"]);

             $http.get(queryString)
                 .success(function(result) {
                    console.log(result);
                    });




        };

        service.trackTiming = function(category, variable, value, opt_label) {
           //  console.log("TRACK: Timing tracked", category, variable, value, opt_label);
        };

        return service;
    });
})();
