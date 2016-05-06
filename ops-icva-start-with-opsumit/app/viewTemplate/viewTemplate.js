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
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log', 'InputManager', '$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log,  InputManager, $localStorage) {
									
                                    console.log("loaded viewTemplate page. previous key message: " + $rootScope.lastKeyMessage + " $rootScope.AppInitiatized: " + $rootScope.AppInitiatized);
                                    
                                    $localStorage.start_state = "viewTemplate.home";
                                    /*
                                    if( $rootScope.AppInitiatized == false ) {
                                         window.setTimeout( function() { $("#loading-overlay").hide() }, 700);
                                         $rootScope.AppInitiatized = true;
                                    } 
                                    */
                                                                    
                                    $scope.backgroundImage = "assets/images/slides/Slide_0000_0.0-Opsumit-Homepage.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
                                    	// this includes or exlcudes the navigation block of hotspots from config/hotspots.json
                                        $scope.hotspots = newHotspots; 
                                    });
                                    
                                    /*** handlers for hotspot function calls in the viewTemplate.html  ***/

                                  	$scope.onTap = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onTap" );
                                    };
                                                                      
                                   /*
                                    $scope.onSwipe = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onSwipe" );                                                                                            	                            
                                    }; 
                                    */
                                    
                                    $scope.loadKeyMessage = function(targetKM, targetState) {                                          
                                        $localStorage[targetState] = "viewTemplate.home";
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage(targetKM);
                                        }, 250);                                          
                                    };
                                    
                                    window.myScroll.scrollTo(0, 0, 200);
                                    

                                }
                            ]
                        }
                    }
                })
            
            
            .state('viewTemplate.nice_recommendations', {  // this is the 2013 Nice Recommendations  section 0.2
                    url: '/viewTemplate_nice_recommendations',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log', 'InputManager', '$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log,  InputManager, $localStorage) {
									
                                    console.log("loaded viewTemplate page")
                                    $scope.scrollYPosition = -200;
                                    $localStorage.start_state = "viewTemplate.nice_recommendations";

                                    $scope.backgroundImage = "assets/images/slides/Slide_0002_0.2-2013-NICE-Recommendations.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
                                    	// this includes or exlcudes the navigation block of hotspots from config/hotspots.json
                                        $scope.hotspots = newHotspots; 
                                    });
                                    
                                    /*** handlers for hotspot function calls in the viewTemplate.html  ***/

                                  	$scope.onTap = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onTap" );
                                    };
                                                                      
                                    $scope.onSwipe = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onSwipe" );                                                                                              	                            
                                    };  
                                    
                                    $scope.loadKeyMessage = function(targetKM, targetState) {                                          
                                        $localStorage[targetState] = "viewTemplate.home";
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage(targetKM);
                                        }, 250);                                          
                                    };                                 
                                    
                                    window.myScroll.scrollTo(0, 0, 200);
                                    

                                }
                            ]
                        }
                    }
                }) 
            
            .state('viewTemplate.ecs_guidelines', {  // this is the 2013 Nice Recommendations  section 0.2
                    url: '/viewTemplate_ecs_guidelines',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log', 'InputManager', '$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log,  InputManager, $localStorage) {
									
                                    console.log("loaded viewTemplate page")

                                    $localStorage.start_state = "viewTemplate.ecs_guidelines";
                                    $scope.backgroundImage = "assets/images/slides/Slide_0001_0.1-2015-ECS_ERS-Guidelines.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
                                    	// this includes or exlcudes the navigation block of hotspots from config/hotspots.json
                                        $scope.hotspots = newHotspots; 
                                    });
                                    
                                    /*** handlers for hotspot function calls in the viewTemplate.html  ***/

                                  	$scope.onTap = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onTap" );
                                    };
                                                                      
                                    $scope.onSwipe = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onSwipe" );                                                                                           	                            
                                    };  
                                    
                                    $scope.loadKeyMessage = function(targetKM, targetState) {                                          
                                        $localStorage[targetState] = "viewTemplate.home";
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage(targetKM);
                                        }, 250);                                          
                                    };                                    
                                    
                                    
                                    window.myScroll.scrollTo(0, 0, 200);

                                }
                            ]
                        }
                    }
                })               
            
            



        }
    ]
);
