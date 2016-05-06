angular.module('TouchPanelPresenter.viewTemplate', ['ui.router'])

.config(
    ['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('viewTemplate', {

                abstract: true,
                url: '/viewTemplate',
                templateUrl: 'app/main.html',

                controller: ['$rootScope', '$scope', '$state', '$log',
                    function($rootScope, $scope, $state, $log) {
                        $log.debug("loaded the viewTemplate ")
                    }
                ]

            })

            .state('viewTemplate.home', {    //  This is the 2015 ECS/ERS Guidelines section 0.1
                    url: '/viewTemplate_home',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log) {
									                                    
                                    
                                    console.log("loaded viewTemplate page")

                                    $scope.backgroundImage = "assets/images/slides/Slide_0017_3.0-Safety.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  
                                        $scope.hotspots = newHotspots; 
                                    });
                                    
                                    $scope.handleTouchEvent = function(evtRequest, gesture) {                                            
                                            if( evtRequest == "none" || evtRequest == "" || evtRequest == "undefined"){
                                                return;
                                            } else if ( evtRequest.indexOf("javascript") != -1 ){  // if you want to call a javascript function from a hotspot define the action in config/hotspots.json
                                                // put js code here                                            
                                            } else {
                                                VeevaMessaging.sendMessage(evtRequest);
                                            }                                       
                                    };
                                    
                                    

                                  	$scope.onTap = function(next_state, gesture) {
                                    	 $scope.handleTouchEvent(next_state, gesture);
                                    };
                                                                      
                                    $scope.onSwipe = function(next_state, gesture) {
                                    	 $scope.handleTouchEvent(next_state, gesture);                                                                                              	                            
                                    };   
                                                                     
                                     window.myScroll.scrollTo(0, -1990, 200);
                                     
                                }
                            ]
                        }
                    }
                })
            
            
            .state('viewTemplate.adverse_reactions', {  // this is the 2013 Nice Recommendations  section 0.2
                    url: '/viewTemplate_adverse_reactions',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log) {
									
                                    console.log("loaded viewTemplate page")

                                    $scope.backgroundImage = "assets/images/slides/Slide_0018_3.1-Adverse-Reactions.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
                                    	// this includes or exlcudes the navigation block of hotspots from config/hotspots.json
                                        $scope.hotspots = newHotspots; 
                                    });
                                    
                                    $scope.handleTouchEvent = function(evtRequest, gesture) {                                            
                                            if( evtRequest == "none" || evtRequest == "" || evtRequest == "undefined"){
                                                return;
                                            } else if ( evtRequest.indexOf("javascript") != -1 ){  // if you want to call a javascript function from a hotspot define the action in config/hotspots.json
                                                // put js code here                                            
                                            } else {
                                                VeevaMessaging.sendMessage(evtRequest);
                                            }                                       
                                    };
                                    
                                    /*** handlers for hotspot function calls in the viewTemplate.html  ***/

                                  	$scope.onTap = function(next_state, gesture) {
                                    	 $scope.handleTouchEvent(next_state, gesture);
                                    };
                                                                      
                                    $scope.onSwipe = function(next_state, gesture) {
                                    	 $scope.handleTouchEvent(next_state, gesture);                                                                                              	                            
                                    };                                                                         

                                }
                            ]
                        }
                    }
                })            
            
            
            .state('viewTemplate.post_marketing', {  // this is the 2013 Nice Recommendations  section 0.2
                    url: '/viewTemplate_post_marketing',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log) {
									
                                    console.log("loaded viewTemplate page")

                                    $scope.backgroundImage = "assets/images/slides/Slide_0019_3.2-Post-Marketing-Safety-Information.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
                                    	// this includes or exlcudes the navigation block of hotspots from config/hotspots.json
                                        $scope.hotspots = newHotspots; 
                                    });
                                    
                                    $scope.handleTouchEvent = function(evtRequest, gesture) {                                            
                                            if( evtRequest == "none" || evtRequest == "" || evtRequest == "undefined"){
                                                return;
                                            } else if ( evtRequest.indexOf("javascript") != -1 ){  // if you want to call a javascript function from a hotspot define the action in config/hotspots.json
                                                // put js code here                                            
                                            } else {
                                                VeevaMessaging.sendMessage(evtRequest);
                                            }                                       
                                    };
                                    
                                    /*** handlers for hotspot function calls in the viewTemplate.html  ***/

                                  	$scope.onTap = function(next_state, gesture) {
                                    	 $scope.handleTouchEvent(next_state, gesture);
                                    };
                                                                      
                                    $scope.onSwipe = function(next_state, gesture) {
                                    	 $scope.handleTouchEvent(next_state, gesture);                                                                                              	                            
                                    };                                                                         

                                }
                            ]
                        }
                    }
                })                
            



        }
    ]
);
