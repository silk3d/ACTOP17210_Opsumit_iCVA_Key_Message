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
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									
                                    console.log("loaded viewTemplate.home page")
                                                                    
                                    $scope.backgroundImage = "assets/images/slides/Slide_0010_2.0-Baseline-characteristics---zoom.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
                                    	// this includes or exlcudes the navigation block of hotspots from config/hotspots.json
                                        $scope.hotspots = newHotspots; 
                                    });  
                                    
                                    $scope.logoPressed = function() {
                                        console.log("logo pressed ")
                                        $localStorage.start_state = "viewTemplate.home";
                                        
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage('gotoslide:ops-icva-start-with-opsumit.zip');
                                        }, 250);                                            
                                    };   

                                    
                                  	$scope.onTap = function(next_state, gesture) {      
                                        
                                        console.log("viewTemplate.home next state: " + next_state + " gesture: " + gesture);
                                        InputManager.handleGesture(next_state, gesture, $scope, "onTap" );
                                    };
                                                                      
                                    $scope.onSwipe = function(next_state, gesture) {                                     
                                        InputManager.handleGesture(next_state, gesture, $scope, "onSwipe" );
                                    };
                                    
                                    $scope.loadKeyMessage = function(targetKM, targetState) { 
                                        $localStorage[targetState] = "viewTemplate.home";
                                        	
                                        setTimeout(function () {
                                        		console.log("Loading KM: " + targetKM + " with state: " + targetState );
                                                VeevaMessaging.sendMessage(targetKM);
                                        }, 250);                                          
                                    };                                      
                                    
                                    window.myScroll.scrollTo(0, -1722, 200);
                                    

                                }
                            ]
                        }
                    }
                })
            
            
            .state('viewTemplate.zoom', {  // this is the 2013 Nice Recommendations  section 0.2
                    url: '/viewTemplate_zoom',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log', 'InputManager', '$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									
                                    console.log("loaded zoom page")

                                    $scope.backgroundImage = "assets/images/slides/Slide_0010_2.0-Baseline-characteristics---zoom.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
                                    	// this includes or exlcudes the navigation block of hotspots from config/hotspots.json
                                        $scope.hotspots = newHotspots; 
                                    });                                   
                                    
                                    $scope.SayHello = function(sayHelloTo) {
                                        if( arguments.length > 1) {
                                            for(var i = 0; i < arguments.length; i++)
                                                console.log("Howdy: " + arguments[i]);
                                        } else {
                                            console.log("HELLO, " + sayHelloTo);  
                                        }                                        
                                    };
                                    
                                    $scope.logoPressed = function() {
                                        console.log("logo pressed ")
                                        $localStorage.start_state = "viewTemplate.home";
                                        
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage('gotoslide:ops-icva-start-with-opsumit.zip');
                                        }, 250);                                            
                                    };                                     

                                  	$scope.onTap = function(next_state, gesture) {                                        
                                        InputManager.handleGesture(next_state, gesture, $scope, "onTap" );
                                    };
                                        
                                                                
                                    $scope.onSwipe = function(next_state, gesture) {                                     
                                        InputManager.handleGesture(next_state, gesture, $scope, "onSwipe" );
                                    };
                                   
                                    
                                    $scope.loadKeyMessage = function(targetKM, targetState) { 
                                        $localStorage[targetState] = "viewTemplate.home";
                                        	
                                        setTimeout(function () {
                                        		console.log("Loading KM: " + targetKM + " with state: " + targetState );
                                                VeevaMessaging.sendMessage(targetKM);
                                        }, 250);                                          
                                    };                                      
                                    
                                    window.myScroll.scrollTo(0, -1722, 200);

                                }
                            ]
                        }
                    }
                })            
            
            
            .state('viewTemplate.mono_combo', {  // this is the 2013 Nice Recommendations  section 0.2
                    url: '/viewTemplate_mono_combo',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log', 'InputManager', '$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									
                                    console.log("loaded viewTemplate page")


                                    $scope.backgroundImage = "assets/images/slides/Slide_0011_2.0-Baseline-characteristics---MonoCombo-popUP.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
                                    	// this includes or exlcudes the navigation block of hotspots from config/hotspots.json
                                        $scope.hotspots = newHotspots; 
                                    });
                                    
                                    $scope.logoPressed = function() {
                                        console.log("logo pressed ")
                                        $localStorage.start_state = "viewTemplate.home";
                                        
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage('gotoslide:ops-icva-start-with-opsumit.zip');
                                        }, 250);                                            
                                    };                                    

                                  	$scope.onTap = function(next_state, gesture) {       
                                        
                                        InputManager.handleGesture(next_state, gesture, $scope );
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
                                    
                                    window.myScroll.scrollTo(0, -1722, 200);

                                }
                            ]
                        }
                    }
                }) 
            
            
            .state('viewTemplate.func_class', {  // this is the 2013 Nice Recommendations  section 0.2
                    url: '/viewTemplate_func_class',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log', 'InputManager', '$localStorage', 
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									
                                    console.log("loaded viewTemplate page")

                                    $scope.backgroundImage = "assets/images/slides/Slide_0012_2.0-Baseline-characteristics---FuncClass-popUP.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
                                    	// this includes or exlcudes the navigation block of hotspots from config/hotspots.json
                                        $scope.hotspots = newHotspots; 
                                    });
                                    
                                    $scope.logoPressed = function() {
                                        console.log("logo pressed ")
                                        $localStorage.start_state = "viewTemplate.home";
                                        
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage('gotoslide:ops-icva-start-with-opsumit.zip');
                                        }, 250);                                            
                                    };                                     
                                    
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
                                    
                                    window.myScroll.scrollTo(0, -1722, 200);

                                }
                            ]
                        }
                    }
                })
            
            .state('viewTemplate.etiologies', {  // this is the 2013 Nice Recommendations  section 0.2
                    url: '/viewTemplate_etiologies',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log', 'InputManager', '$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									
                                    console.log("loaded viewTemplate page")

                                    $scope.backgroundImage = "assets/images/slides/Slide_0013_2.0-Baseline-characteristics---Etiologies-popUP.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
                                    	// this includes or exlcudes the navigation block of hotspots from config/hotspots.json
                                        $scope.hotspots = newHotspots; 
                                    });
                                    
                                    $scope.logoPressed = function() {
                                        console.log("logo pressed ")
                                        $localStorage.start_state = "viewTemplate.home";
                                        
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage('gotoslide:ops-icva-start-with-opsumit.zip');
                                        }, 250);                                            
                                    };                                       
                                    
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
                                    
                                    window.myScroll.scrollTo(0, -1722, 200);

                                }
                            ]
                        }
                    }
                })             
            
            
            .state('viewTemplate.age', {  // this is the 2013 Nice Recommendations  section 0.2
                    url: '/viewTemplate_age',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log', 'InputManager', '$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									
                                    console.log("loaded viewTemplate page")

                                    $scope.backgroundImage = "assets/images/slides/Slide_0014_2.0-Baseline-characteristics---Age-popUP.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
                                    	// this includes or exlcudes the navigation block of hotspots from config/hotspots.json
                                        $scope.hotspots = newHotspots; 
                                    });
                                    
                                    $scope.logoPressed = function() {
                                        console.log("logo pressed ")
                                        $localStorage.start_state = "viewTemplate.home";
                                        
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage('gotoslide:ops-icva-start-with-opsumit.zip');
                                        }, 250);                                            
                                    };                                        
                                    
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
                                    
                                    window.myScroll.scrollTo(0, -1722, 200);

                                }
                            ]
                        }
                    }
                })  
            
            .state('viewTemplate.sex', {  // this is the 2013 Nice Recommendations  section 0.2
                    url: '/viewTemplate_sex',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log', 'InputManager', '$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									
                                    console.log("loaded viewTemplate page")

                                    $scope.backgroundImage = "assets/images/slides/Slide_0015_2.0-Baseline-characteristics---Sex-popUP.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
                                    	// this includes or exlcudes the navigation block of hotspots from config/hotspots.json
                                        $scope.hotspots = newHotspots; 
                                    });
                                    
                                    $scope.logoPressed = function() {
                                        console.log("logo pressed ")
                                        $localStorage.start_state = "viewTemplate.home";
                                        
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage('gotoslide:ops-icva-start-with-opsumit.zip');
                                        }, 250);                                            
                                    };                                     
                                    
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
                                    
                                    window.myScroll.scrollTo(0, -1722, 200);

                                }
                            ]
                        }
                    }
                }) 
            
            .state('viewTemplate.time', {  // this is the 2013 Nice Recommendations  section 0.2
                    url: '/viewTemplate_time',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log', 'InputManager', '$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									
                                    console.log("loaded viewTemplate page")

                                    $scope.backgroundImage = "assets/images/slides/Slide_0016_2.0-Baseline-characteristics---Time-popUP.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  // second parameter "true).then(" is include_nav_hotspots = true to include nav hotspot data or false to exclude nav hotspots in this view
                                    	// this includes or exlcudes the navigation block of hotspots from config/hotspots.json
                                        $scope.hotspots = newHotspots; 
                                    });
                                    
                                    $scope.logoPressed = function() {
                                        console.log("logo pressed ")
                                        $localStorage.start_state = "viewTemplate.home";
                                        
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage('gotoslide:ops-icva-start-with-opsumit.zip');
                                        }, 250);                                            
                                    };                                         
                                    
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
                                    
                                    window.myScroll.scrollTo(0, -1722, 200);

                                }
                            ]
                        }
                    }
                })                



        }
    ]
);
