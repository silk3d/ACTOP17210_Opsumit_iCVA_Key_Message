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
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log','InputManager', '$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									             
                                    $scope.fullisi_visible = false;
                                  
                                    $localStorage.efficacy_state = "viewTemplate.home";
                                    
                                    $scope.getChartClass = function() {
                                    	console.log("getChartClass small");
                                    	return "small-chart-45";
                                    }                         
                                    
                                    if( $rootScope.viewTemplateHome_viewed === true ){
                                    	$scope.chartSource = "assets/images/animations/compressed/45_small_chart_lv01.png";
                                    } else {
                                    	$scope.chartSource = "assets/images/animations/compressed/45_small_chart_lv01.gif";
                                    }
                                               
                                     // ?timestamp=" + Date.now();                                   
                                    
                                    console.log("loaded viewTemplate page last key message was: " + $rootScope.lastKeyMessage);
                                    $("#isi-scroll-frame").hide();

                                    $scope.backgroundImage = "assets/images/slides/Slide_0003_1.0-Kaplan-Meir.png";
                                   
                                    
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  
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
                                    	                                                                    
                                    	if( targetKM != "viewTemplate.summary" );
                                        	$localStorage[targetState] = targetKM.indexOf("baseline") == -1 ? "viewTemplate.home" : "viewTemplate.zoom";
                                        	
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage(targetKM);
                                        }, 250);                                          
                                    };                                     
                                                                     
                                    
                                    $scope.isiHidden = true;
                                    $rootScope.viewTemplateHome_viewed = true;
                                
                                    setTimeout(function () {
                                        window.scrollISITo(0, -380, 200);
                                    }, 500);                                       
                                    
                                    
                                     
                                }
                            ]
                        }
                    }
                })
                
                
            .state('viewTemplate.zoom', {    //  This is the 2015 ECS/ERS Guidelines section 0.1
                    url: '/viewTemplate_zoom',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log','InputManager','$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									             
                                    $scope.fullisi_visible = false;  
                                    
                                    $localStorage.efficacy_state = "viewTemplate.zoom";
                                    
                                    $scope.getChartClass = function() {
                                    console.log("getChartClass large");
                                    	return "large-chart-45";
                                    }                                 
                                    
                                    if( $rootScope.viewTemplateZoom_viewed === true ) {
                                    	$scope.chartSource = "assets/images/animations/compressed/45_large_chart_lv01.png";
                                    } else {
                                    	$scope.chartSource = "assets/images/animations/compressed/45_large_chart_lv01.gif";
                                    }
                                     // ?timestamp=" + Date.now();   
                                    
                                     $scope.logoPressed = function() {
                                        console.log("logo pressed ")
                                        $localStorage.start_state = "viewTemplate.home";
                                        
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage('gotoslide:ops-icva-start-with-opsumit.zip');
                                        }, 250);                                            
                                    };  
                                    
                                    
                                    console.log("loaded viewTemplate.zoom page last key message was: " + $rootScope.lastKeyMessage);
                                    $("#isi-scroll-frame").hide();

                                    $scope.backgroundImage = "assets/images/slides/Slide_0004_1.0-Kaplan-Meir---zoom.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  
                                        $scope.hotspots = newHotspots; 
                                    });                                                                                                    

                                  	$scope.onTap = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onTap" );
                                    };
                                                                      
                                    $scope.onSwipe = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onSwipe" );                                                                                              	                            
                                    };   
                                                       
                                    $scope.loadKeyMessage = function(targetKM, targetState) { 
                                    	if( targetKM != "viewTemplate.summary" );
                                        	$localStorage[targetState] = targetKM.indexOf("baseline") == -1 ? "viewTemplate.home" : "viewTemplate.zoom";
                                        	
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage(targetKM);
                                        }, 250);                                          
                                    };                                                                    
                                    
                                    
                                    $scope.isiHidden = true;
                                    $rootScope.viewTemplateZoom_viewed = true;
                                
                                    setTimeout(function () {
                                    		window.myScroll.refresh();
                                            window.scrollISITo(0, -380, 200);
                                    }, 500);                                     
                                    
                                    
                                     
                                }
                            ]
                        }
                    }
                })    
                
            .state('viewTemplate.without_opsumit', {    //  This is the 2015 ECS/ERS Guidelines section 0.1
                    url: '/viewTemplate_without_opsumit',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log','InputManager','$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									             
                                    $scope.fullisi_visible = false;  
                                    
                                    $localStorage.efficacy_state = "viewTemplate.without_opsumit";
                                    
                                    $scope.getChartClass = function() {
                                    	return "without-opsumit-chart";
                                    }    
                                    
                                    if( $rootScope.viewTemplateWithout_viewed === true ) {
                                    	$scope.chartSource = "assets/images/animations/compressed/WithoutOpsumit_chart_lv01.png";
                                    } else {
                                    	$scope.chartSource = "assets/images/animations/compressed/WithoutOpsumit_chart_lv01.gif";
                                    }                             
                                     // ?timestamp=" + Date.now();                                                                                                                   
                                    
                                    $scope.logoPressed = function() {
                                        console.log("logo pressed ")
                                        $localStorage.start_state = "viewTemplate.home";
                                        
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage('gotoslide:ops-icva-start-with-opsumit.zip');
                                        }, 250);                                            
                                    };  
                                    
                                    console.log("loaded viewTemplate.without_opsumit page last key message was: " + $rootScope.lastKeyMessage);
                                    $("#isi-scroll-frame").hide();

                                    $scope.backgroundImage = "assets/images/slides/Slide_0005_1.1-Without-Opsumit.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  
                                        $scope.hotspots = newHotspots; 
                                    });                                                                                                    

                                  	$scope.onTap = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onTap" );
                                    };
                                                                      
                                    $scope.onSwipe = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onSwipe" );                                                                                              	                            
                                    };   
                                    
                                    $scope.loadKeyMessage = function(targetKM, targetState) { 
                                    	if( targetKM != "viewTemplate.summary" );
                                        	$localStorage[targetState] = targetKM.indexOf("baseline") == -1 ? "viewTemplate.home" : "viewTemplate.zoom";
                                        	
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage(targetKM);
                                        }, 250);                                          
                                    }; 
                                    
                                    $scope.isiHidden = true;
                                    $rootScope.viewTemplateWithout_viewed = true;
                                
                                    setTimeout(function () {
                                    		window.myScroll.refresh();
                                            window.scrollISITo(0, -1275, 200);
                                    }, 500);                                        
                                    
                                    
                                     
                                }
                            ]
                        }
                    }
                })     
                
 .state('viewTemplate.summary', {    //  This is the 2015 ECS/ERS Guidelines section 0.1
                    url: '/viewTemplate_summary',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log','InputManager','$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									             
                                    $scope.fullisi_visible = false;                                                                         
                                    
                                    
                                    $scope.lastSubview = $localStorage.efficacy_state ? $localStorage.efficacy_state : "viewTemplate.zoom";
                                    $localStorage.efficacy_state = "viewTemplate.summary";
                                    
                                    $scope.getChartClass = function() {
                                    	return "none";
                                    }                                 
                                    $scope.chartSource = "";                                   
                                    
                                    
                                    $("#isi-scroll-frame").hide();

                                    $scope.backgroundImage = "assets/images/slides/Slide_0006_1.2-Summary-of-Events.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  
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
                                    	var previousView = $scope.lastSubview == "viewTemplate.summary" ? "viewTemplate.zoom" : $scope.lastSubview;
                                    
                                    	 InputManager.handleGesture(previousView, gesture, $scope, "onSwipe" );                                      	                                                                                             	                            
                                    };   
                                    
                                    $scope.loadKeyMessage = function(targetKM, targetState) { 
                                    	if( targetKM != "viewTemplate.summary" );
                                        	$localStorage[targetState] = targetKM.indexOf("baseline") == -1 ? "viewTemplate.home" : "viewTemplate.zoom";
                                        	
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage(targetKM);
                                        }, 250);                                          
                                    }; 
                                    
                                    $scope.isiHidden = true;
                                
                                    setTimeout(function () {
                                    		window.myScroll.refresh();
                                            window.scrollISITo(0, -410, 200);
                                    }, 500);                                     
                                    
                                    
                                     
                                }
                            ]
                        }
                    }
                }) 
                
 .state('viewTemplate.mono_combo', {    //  This is the 2015 ECS/ERS Guidelines section 0.1
                    url: '/viewTemplate_mono_combo',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log','InputManager','$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									             
                                    $scope.fullisi_visible = false; 
                                    
                                    $localStorage.efficacy_state = "viewTemplate.mono_combo";
                                    
                                    $scope.getChartClass = function() {
                                    	return "mono-combo-chart-38";
                                    }                               
                                    
                                    if( $rootScope.viewTemplateMonoCombo_viewed === true ) {
                                    	$scope.chartSource = "assets/images/animations/compressed/38_chart_lv01.png";
                                    } else {
                                    	$scope.chartSource = "assets/images/animations/compressed/38_chart_lv01.gif";
                                    }  
                                     // ?timestamp=" + Date.now();                                    
                                	
                                	
                                    $scope.logoPressed = function() {
                                        console.log("logo pressed ")
                                        $localStorage.start_state = "viewTemplate.home";
                                        
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage('gotoslide:ops-icva-start-with-opsumit.zip');
                                        }, 250);                                            
                                    };  
                                	
                                    console.log("loaded viewTemplate.mono_combo page last key message was: " + $rootScope.lastKeyMessage);
                                    $("#isi-scroll-frame").hide();

                                    $scope.backgroundImage = "assets/images/slides/Slide_0007_1.3-Mono_Combo.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  
                                        $scope.hotspots = newHotspots; 
                                    });                                                                                                    

                                  	$scope.onTap = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onTap" );
                                    };
                                                                      
                                    $scope.onSwipe = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onSwipe" );                                                                                              	                            
                                    };   
                                    
                                    $scope.loadKeyMessage = function(targetKM, targetState) { 
                                    	if( targetKM != "viewTemplate.summary" );
                                        	$localStorage[targetState] = targetKM.indexOf("baseline") == -1 ? "viewTemplate.home" : "viewTemplate.zoom";
                                        	
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage(targetKM);
                                        }, 250);                                          
                                    }; 
                                    
                                    $scope.isiHidden = true;
                                    $rootScope.viewTemplateMonoCombo_viewed
                                
                                    setTimeout(function () {
                                    	window.myScroll.refresh();
                                        window.scrollISITo(0, -1665, 200);
                                    }, 500);                                      
                                    
                                    
                                     
                                }
                            ]
                        }
                    }
                })                                                            
                
 .state('viewTemplate.forest_plot', {    //  This is the 2015 ECS/ERS Guidelines section 0.1
                    url: '/viewTemplate_forest_plot',

                    views: {

                        'views_container': {
                            templateUrl: 'app/viewTemplate/viewTemplate.html',
                            controller: ['$rootScope', '$scope', '$stateParams', '$http', '$state', 'HotspotsManager', 'VeevaMessaging', '$log','InputManager','$localStorage',
                                function($rootScope, $scope, $stateParams, $http, $state, HotspotsManager, VeevaMessaging, $log, InputManager, $localStorage) {
									             
                                    $scope.fullisi_visible = false;
                                    
                                    $localStorage.efficacy_state = "viewTemplate.forest_plot";
                                    
                                    $scope.getChartClass = function() {
                                    	return "none";
                                    }                                 
                                    $scope.chartSource = "";                                       
                                    
                                    $scope.logoPressed = function() {
                                        console.log("logo pressed ")
                                        $localStorage.start_state = "viewTemplate.home";
                                        
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage('gotoslide:ops-icva-start-with-opsumit.zip');
                                        }, 250);                                            
                                    };  
                                    
                                    console.log("loaded viewTemplate.mono_combo page last key message was: " + $rootScope.lastKeyMessage);
                                    $("#isi-scroll-frame").hide();

                                    $scope.backgroundImage = "assets/images/slides/Slide_0008_1.3.1-Mono-Combo-Therapy-Forest-Plot.png";
                                    HotspotsManager.getAllHotspotsFromState($rootScope.currentState, true).then(function(newHotspots) {  
                                        $scope.hotspots = newHotspots; 
                                    });                                                                                                    

                                  	$scope.onTap = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onTap" );
                                    };
                                                                      
                                    $scope.onSwipe = function(next_state, gesture) {
                                    	 InputManager.handleGesture(next_state, gesture, $scope, "onSwipe" );                                                                                              	                            
                                    };  
                                    
                                    $scope.loadKeyMessage = function(targetKM, targetState) { 
                                    	if( targetKM != "viewTemplate.summary" );
                                        	$localStorage[targetState] = targetKM.indexOf("baseline") == -1 ? "viewTemplate.home" : "viewTemplate.zoom";
                                        	
                                        setTimeout(function () {
                                                VeevaMessaging.sendMessage(targetKM);
                                        }, 250);                                          
                                    };  
                                    
                                    $scope.isiHidden = true;
                                
                                    setTimeout(function () {
                                    		window.myScroll.refresh();
                                            window.scrollISITo(0, 0, 200);
                                    }, 500);                                      
                                    
                                    
                                     
                                }
                            ]
                        }
                    }
                })            
            
           
            
            


        }
    ]
);
