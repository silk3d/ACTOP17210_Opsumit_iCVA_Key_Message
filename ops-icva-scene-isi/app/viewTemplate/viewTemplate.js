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
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log', 'InputManager',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log,  InputManager) {
									             
                                    $scope.fullisi_visible = false;
                                    window.setTimeout( function() { $("#loading-overlay").hide() }, 1500);  
                                    
                                    console.log("loaded viewTemplate page last key message was: " + $rootScope.lastKeyMessage);
                                    $("#isi-scroll-frame").hide();

                                    $scope.backgroundImage = "assets/images/slides/Slide_0017_3.0-Safety.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  
                                        $scope.hotspots = newHotspots; 
                                    });
                                                                        

                                  	$scope.onTap = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onTap" );
                                    };
                                                                      
                                    $scope.onSwipe = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onSwipe" );                                                                                          	                            
                                    };   
                                                                     
                                    
                                    
                                    $scope.isiHidden = true;
                                                                                                        
                                    VeevaMessaging.sendMessage("viewTemplate.isi");
                                    
                                     
                                }
                            ]
                        }
                    }
                })
            
            
                   
            

            .state('viewTemplate.isi', {  // this is the 2013 Nice Recommendations  section 0.2
                    url: '/viewTemplate_isi',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log', 'InputManager', '$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log,  InputManager, $localStorage) {
									
                                    console.log("loaded viewTemplate page")
                                    $("#scroll-for-more").hide();

                                    $scope.fullisi_visible = true;
                                    if( $rootScope.AppInitiatized == false ) {
                                         window.setTimeout( function() { $("#loading-overlay").hide() }, 700);
                                         $rootScope.AppInitiatized = true;
                                    }   
                                    

                                    $scope.backgroundImage = "assets/images/slides/Slide_0020-ISI.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, false).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
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
                                    
                                    $scope.logoPressed = function() {
                                        console.log("logo pressed ")
                                        $localStorage.start_state = "viewTemplate.home";
                                        
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage('gotoslide:ops-icva-start-with-opsumit.zip');
                                        }, 250);                                            
                                    };                                     
                                    
                                    var isiScroll;
                                     window.isiScroll = new iScroll('full-isi-wrapper', { 
                                         bounce: true,
                                         hScroll: false,
                                         hScrollbar: false,
                                         vScrollbar: true,
                                         fixedScrollbar: false,
                                         hideScrollbar: false,                 
                                         scrollbarClass: 'myScrollbar' });
                                    setTimeout(function () {
                                            window.isiScroll.refresh();
                                        
                                    }, 200);                                       
                                    

                                }
                            ]
                        }
                    }
                }) 
            
            


        }
    ]
);
