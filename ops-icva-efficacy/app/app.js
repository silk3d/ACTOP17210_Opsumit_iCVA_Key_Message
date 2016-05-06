// Make sure to include the `ui.router` module as a dependency

angular.module('hotspotServices', [])
    .factory('HotspotsManager', ['$http', '$log', 'HOTSPOTS_OPACITY', '$q', function($http, $log, HOTSPOTS_OPACITY, $q){
    	var hotspotDataObject = {};						
 		hotspotDataObject.navigationHotspots = [];
 		hotspotDataObject.hotspotsTable = {};
 		hotspotDataObject.initialized = false;

        var hotspotSharedStyles = "position:absolute; display:block;-webkit-tap-highlight-color: rgba(0,0,0,0); " + HOTSPOTS_OPACITY;
        var navSharedStyles = " top:20px; " + hotspotSharedStyles;

        var getAllHotspotsFromState = function(reqState, include_nav_hotspots) {
        	
            var deferred = $q.defer();
            var requestedState = reqState;

            if( hotspotDataObject.initialized == true) {
                var combined = (include_nav_hotspots == true) ? hotspotDataObject.navigationHotspots.concat(hotspotDataObject.hotspotsTable[requestedState]) : hotspotDataObject.hotspotsTable[requestedState];
                deferred.resolve(combined);
                
            } else if( hotspotDataObject.initialized == false) {

                $http.get('config/hotspots.json').success(function(data) {
                    for(var i = 0; i <  data["navigation"].length; i++) {
                        var finalNavItem = {};
                        finalNavItem.style = data["navigation"][i].style + navSharedStyles;
                        finalNavItem.swipeleft = (typeof(data["navigation"][i].swipeleft) != "undefined") ? data["navigation"][i].swipeleft : "";
                        finalNavItem.swiperight = (typeof(data["navigation"][i].swiperight) != "undefined") ? data["navigation"][i].swiperight : "";
                        finalNavItem.swipeup = (typeof(data["navigation"][i].swipeup) != "undefined") ? data["navigation"][i].swipeup : "";
                        finalNavItem.swipedown = (typeof(data["navigation"][i].swipedown) != "undefined") ? data["navigation"][i].swipedown : "";                      
                        finalNavItem.tap = (typeof(data["navigation"][i].tap) != "undefined") ? data["navigation"][i].tap : "";
                        hotspotDataObject.navigationHotspots.push(finalNavItem);
                    }

                    for(var i = 0; i <  data["states"].length; i++) {
                        hotspotDataObject.hotspotsTable[data["states"][i].state] = [];
                        hotspotDataObject.hotspotsTable[data["states"][i].state].nav_hotspots = data["states"][i].nav_hotspots;

                        for(var hs = 0; hs < data["states"][i].hotspots.length; hs++)
                        {
                            var item = {};
                            var depth = " z-index:110;";
                            item.style = data["states"][i].hotspots[hs].style + hotspotSharedStyles + " " + data["states"][i].hotspotColor + depth;
                            item.swipeleft = (typeof(data["states"][i].hotspots[hs].swipeleft) != "undefined") ? data["states"][i].hotspots[hs].swipeleft : "";
                            item.swiperight = (typeof(data["states"][i].hotspots[hs].swiperight) != "undefined") ? data["states"][i].hotspots[hs].swiperight : "";
                            item.swipeup = (typeof(data["states"][i].hotspots[hs].swipeup) != "undefined") ? data["states"][i].hotspots[hs].swipeup : "";
                            item.swipedown = (typeof(data["states"][i].hotspots[hs].swipedown) != "undefined") ? data["states"][i].hotspots[hs].swipedown : "";                            
                            item.tap = (typeof(data["states"][i].hotspots[hs].tap) != "undefined") ? data["states"][i].hotspots[hs].tap : "";
                            hotspotDataObject.hotspotsTable[data["states"][i].state].push(item);
                        }
                    }
                    hotspotDataObject.initialized = true;
                    
                    console.log("YOU REQUESTED: " + requestedState + " include nav: " + hotspotDataObject.hotspotsTable[requestedState].nav_hotspots );
                    
                    var combined = (include_nav_hotspots == true) ? hotspotDataObject.navigationHotspots.concat(hotspotDataObject.hotspotsTable[requestedState]) : hotspotDataObject.hotspotsTable[requestedState];
                    deferred.resolve(combined);
                });
            }

            return deferred.promise;
        };

    
        return{

            getAllHotspotsFromState:getAllHotspotsFromState,
        
        	getNavigationHotspots:function() {
        		return hotspotDataObject.navigationHotspots;
        	},
        	
        	getHotspotsByState:function(reqState) {
                if( hotspotDataObject.initialized == true) {
                    return hotspotDataObject.hotspotsTable[reqState];
                } else if( hotspotDataObject.initialized == false) {

                    $http.get('config/hotspots.json').success(function(data) {
                        for(var i = 0; i <  data["navigation"].length; i++) {
                            var finalNavItem = {};
                            finalNavItem.style = data["navigation"][i].style + navSharedStyles;
                            finalNavItem.swiperight = (typeof(data["navigation"][i].swiperight) != "undefined") ? data["navigation"][i].swiperight : "";
                            finalNavItem.swipeleft = (typeof(data["navigation"][i].swipeleft) != "undefined") ? data["navigation"][i].swipeleft : ""; 
                            finalNavItem.swipeup = (typeof(data["navigation"][i].swipeup) != "undefined") ? data["navigation"][i].swipeup : "";
                            finalNavItem.swipedown = (typeof(data["navigation"][i].swipedown) != "undefined") ? data["navigation"][i].swipedown : "";                                                                                   
                            finalNavItem.tap = (typeof(data["navigation"][i].tap) != "undefined") ? data["navigation"][i].tap : "";
                            hotspotDataObject.navigationHotspots.push(finalNavItem);
                        }

                        for(var i = 0; i <  data["states"].length; i++) {
                            hotspotDataObject.hotspotsTable[data["states"][i].state] = [];

                            for(var hs = 0; hs < data["states"][i].hotspots.length; hs++)
                            {
                                var item = {};
                                var depth = " z-index:110;";
                                item.style = data["states"][i].hotspots[hs].style + hotspotSharedStyles + " " + data["states"][i].hotspotColor + depth;
                                item.swiperight = (typeof(data["states"][i].hotspots[hs].swiperight) != "undefined") ? data["states"][i].hotspots[hs].swiperight : "";
                                item.swipeleft = (typeof(data["states"][i].hotspots[hs].swipeleft) != "undefined") ? data["states"][i].hotspots[hs].swipeleft : "";
                                item.swipeup = (typeof(data["states"][i].hotspots[hs].swipeup) != "undefined") ? data["states"][i].hotspots[hs].swipeup : "";
                                item.swipedown = (typeof(data["states"][i].hotspots[hs].swipedown) != "undefined") ? data["states"][i].hotspots[hs].swipedown : "";                                                               
                                item.tap = (typeof(data["states"][i].hotspots[hs].tap) != "undefined") ? data["states"][i].hotspots[hs].tap : "";
                                hotspotDataObject.hotspotsTable[data["states"][i].state].push(item); // data["states"][i].hotspots[hs]);
                            }
                        }
                        hotspotDataObject.initialized = true;
                        return hotspotDataObject.hotspotsTable[reqState];
                    });
                }
        	},

            loadHotspots:function(callback) {
        		if( !hotspotDataObject.initialized ) {
                    $log.debug("loadHotspots in HotspotManager")
					$http.get('config/hotspots.json').success(function(data) {
							for(var i = 0; i <  data["navigation"].length; i++) {
								var finalNavItem = {};
								finalNavItem.style = data["navigation"][i].style + navSharedStyles;
								finalNavItem.swiperight = (typeof(data["navigation"][i].swiperight) != "undefined") ? data["navigation"][i].swiperight : "";
								finalNavItem.swipeleft = (typeof(data["navigation"][i].swipeleft) != "undefined") ? data["navigation"][i].swipeleft : "";
								finalNavItem.swipeup = (typeof(data["navigation"][i].swipeup) != "undefined") ? data["navigation"][i].swipeup : "";
								finalNavItem.swipedown = (typeof(data["navigation"][i].swipedown) != "undefined") ? data["navigation"][i].swipedown : "";																									
								finalNavItem.tap = (typeof(data["navigation"][i].tap) != "undefined") ? data["navigation"][i].tap : "";
								hotspotDataObject.navigationHotspots.push(finalNavItem);
							}   
							
						for(var i = 0; i <  data["states"].length; i++) {
							hotspotDataObject.hotspotsTable[data["states"][i].state] = [];				

							for(var hs = 0; hs < data["states"][i].hotspots.length; hs++)
							{
							 var item = {};
                                var depth = " z-index:110;";
								item.style = data["states"][i].hotspots[hs].style + hotspotSharedStyles + " " + data["states"][i].hotspotColor + depth;
								item.swiperight = (typeof(data["states"][i].hotspots[hs].swiperight) != "undefined") ? data["states"][i].hotspots[hs].swiperight : "";
								item.swipeleft = (typeof(data["states"][i].hotspots[hs].swipeleft) != "undefined") ? data["states"][i].hotspots[hs].swipeleft : "";	
								item.swipeup = (typeof(data["states"][i].hotspots[hs].swipeup) != "undefined") ? data["states"][i].hotspots[hs].swipeup : "";
								item.swipedown = (typeof(data["states"][i].hotspots[hs].swipedown) != "undefined") ? data["states"][i].hotspots[hs].swipedown : "";																							
								item.tap = (typeof(data["states"][i].hotspots[hs].tap) != "undefined") ? data["states"][i].hotspots[hs].tap : "";
								hotspotDataObject.hotspotsTable[data["states"][i].state].push(item); // data["states"][i].hotspots[hs]);
							}
						}
							hotspotDataObject.initialized = true;
							callback(data);
					});
                }
        	},   
        	    
        	isReady:function() {
        		return hotspotDataObject.initialized;
        	},    	
        
            getHotspotData: function(callback){
                $http.get('config/hotspots.json').success(function(data) {
                    // prepare data here
                    callback(data);
                });
            }

        };
    }]);


/************  Service for receiving Veeva and Viewstate requests from Viewstates  ********/

angular.module('Messaging', [])
    .factory('VeevaMessaging', ['$http','$rootScope', '$state', "$log", function($http, $rootScope, $state, $log){
        var initialized = false;

        return{
            initialize: function(){
                initialized = true;
                return initialized;
            },

            sendMessage:function( request ) {

                if( request.indexOf("gotoslide") != -1) {
                    var slideRequest = request.split(":")[1];
                    
                    
                    if( slideRequest.indexOf(",") != -1 ) {
                        var slide = slideRequest.split(",")[0];
                        var prez = slideRequest.split(",")[1];
                        console.log("launching slide: " + slide + " in presentation: " + prez);
                        com.veeva.clm.gotoSlide(slide,prez);
                    } else {
                        com.veeva.clm.gotoSlide(slideRequest);
                        $log.debug("requesting slide: " + slideRequest);
                    }                                                            

                }else  if( request.indexOf("back") != -1) {
                    console.log("back in send message. last key message was: " + $rootScope.lastKeyMessage)
                    if (typeof $rootScope.lastKeyMessage != 'undefined' && $rootScope.lastKeyMessage != KEY_MESSAGE_ID ) {   
                          console.log("going back to key message: " + $rootScope.lastKeyMessage );
                         com.veeva.clm.gotoSlide( $rootScope.lastKeyMessage);        
                    }                                         
                } else {

                    if( $rootScope.preloaderImagesHidden == false ) {
                        $log.debug("hiding preloader images");
                        //document.getElementById("preloadedImages").style.visibility = "hidden";
                        // $('#preloadedImages').html('');
                        $rootScope.preloaderImagesHidden = true;
                        
                    }

                    $log.debug("going to viewstate: " + request );
                    $state.go(request, {});

                }
            }


        }
    }]);

angular.module('InteractionModule', [])
    .factory('InputManager', ['$http','$rootScope', '$state', "$log", "VeevaMessaging", function($http, $rootScope, $state, $log, VeevaMessaging){
        var initialized = false;

        return{
            initialize: function(){
                initialized = true;
                return initialized;
            },

            handleGesture:function( target_state, gesture, controllerScope, sourceFcn ) {
                                                                                       
                
                        if( target_state == "" || typeof target_state == "undefined")
                            return;   
                            
                        console.log("GESTURE: " + String(gesture).toLowerCase() + " SOURCEFCN: " + String(sourceFcn).toLowerCase() );    
                            
                        if( String(sourceFcn).toLowerCase().indexOf("tap") != -1 ) {
                        	if( String(gesture).toLowerCase().indexOf("tap") == -1 ){
                        		console.log("no match tap gesture.  doing nothing");
                        		return;
                        	}	
                        } 
                        
                        if( String(sourceFcn).toLowerCase().indexOf("swipe") != -1 ) {
                        	if( String(gesture).toLowerCase().indexOf("swipe") == -1 ){
                        		console.log("no match swipe gesture. doing nothing");
                        		return;
                        	}	
                        }                                                
                
                        var cTime = new Date().getTime();
                        var timeSinceLastGesture = cTime - $rootScope.LastGesture.time;

                        if( timeSinceLastGesture < $rootScope.GESTURE_DELAY && gesture == $rootScope.LastGesture.gesture )
                            return;                                          

                        // console.log("time since last gesture: " + timeSinceLastGesture + " GESTURE Delay: " + $rootScope.GESTURE_DELAY + " last gesture time: " + $rootScope.LastGesture.time + " gesture: " + gesture + " last gesture: " + $rootScope.LastGesture.gesture);

                        $rootScope.LastGesture.time = cTime;
                        $rootScope.LastGesture.gesture = gesture;


                        if( target_state == "none" || target_state == "" || target_state == "undefined"){
                            return;
                        } else if ( target_state.indexOf("javascript") != -1 ){  // if you want to call a javascript function from a hotspot define the action in config/hotspots.json
                            // put js code here   
                            var jsFunction = target_state.indexOf("@") != -1 ? target_state.split(":")[1].split("@")[0] : target_state.split(":")[1];
                            var params = [];
                            
                            if ( target_state.indexOf("@") != -1 ){
                               if( target_state.split("@")[1].indexOf(",") != -1 ) {                                   
                                   params = target_state.split("@")[1].split(",");
                               } else {
                                   params.push(target_state.split("@")[1])
                               } 
                                
                                console.log("jsFunction is type: " + (typeof controllerScope[jsFunction]) + " function string: " + jsFunction)                                       
                                if (typeof controllerScope[jsFunction] === "function")    
                                    controllerScope[jsFunction].apply(null, params);
                                
                            } else {
                                controllerScope[jsFunction]();
                            }
                            
                            
                        } else {
                            VeevaMessaging.sendMessage(target_state);
                        }                  
            }


        }
    }]);


/*******  Angularjs hotpsot ui-router states are declared here   ****/
/*																	*/
/*  this is where you include new views by duplicating the viewTemplate line and creating your own view state	*/
/*  																											*/	
/***********************************************/                  
angular.module('TouchPanelPresenter', [
    'TouchPanelPresenter.viewTemplate',   // duplicate this line and rename to each new viewstate and its sub-viewstates.  EDIT ME
    'TouchPanelPresenter.config',
    'ui.router',
    'ngAnimate',
    'ngStorage',
    'ngTouch',
    'hotspotServices',
     'Messaging',
     'hmTouchEvents',
     'InteractionModule'
])

.filter('truncate', function() {
    return function(input, chars, breakOnWord) {
        if (isNaN(chars)) return input;
        if (chars <= 0) return '';
        if (input && input.length > chars) {
            input = input.substring(0, chars);

            if (!breakOnWord) {
                var lastspace = input.lastIndexOf(' ');
                //get last space
                if (lastspace !== -1) {
                    input = input.substr(0, lastspace);
                }
            } else {
                while (input.charAt(input.length - 1) === ' ') {
                    input = input.substr(0, input.length - 1);
                }
            }
            return input + '…';
        }
        return input;
    };
})



.run(
    ['$rootScope', '$state', '$stateParams', '$localStorage', 'HotspotsManager', 'VeevaMessaging', '$log', 'APP_VERSION', 'InputManager',
        function($rootScope, $state, $stateParams, $localStorage, HotspotsManager, VeevaMessaging, $log, APP_VERSION, InputManager ) {

            $rootScope.navigationHotspots = [];
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.preloaderImagesHidden = false;
            
            $rootScope.viewTemplateHome_viewed = false;
            $rootScope.viewTemplateZoom_viewed = false;
            $rootScope.viewTemplateWithout_viewed = false;    
            $rootScope.viewTemplateMonoCombo_viewed = false;                          
                       
            
            $rootScope.AppInitiatized = false;    
            $rootScope.LastGesture = {"gesture":"none", "time":0};
            $rootScope.GESTURE_DELAY = 500;              

            VeevaMessaging.initialize();

            $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
                $rootScope.previousState = from.name;
                $rootScope.currentState = to.name;
                // $log.debug("CurrentState is: " + $rootScope.currentState)  
                // $log functions when $log is enabled in app-config.js
            });
            console.log("Application Version: " + APP_VERSION);

        }
    ]
)

.controller('MainCtrl', function($rootScope, $scope, $state, $http, $timeout) {

    })

    .directive("ngMobileClick", [function () {
        return function (scope, elem, attrs) {
            elem.bind("touchstart click", function (e) {
                e.preventDefault();
                e.stopPropagation();

                scope.$apply(attrs["ngMobileClick"]);
            });
        }
    }])


.config(
    ['$stateProvider', '$urlRouterProvider', '$logProvider', 'LOGGING_ENABLED', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $logProvider, LOGGING_ENABLED, $locationProvider) {

            $logProvider.debugEnabled(LOGGING_ENABLED);  //  LOGGING_ENABLED set in app-config.js



            // $locationProvider.html5Mode(true).hashPrefix('!');   this can be set to re-place # with #! for Search engine crawling
            // $locationProvider.hashPrefix('!');

            /*
                        $locationProvider.html5Mode({
                            enabled: false,
                            requireBase: false
                        });
            */

            $urlRouterProvider


             // .when('/p?id', '/product/:id')
             .otherwise('/');





            $stateProvider

                .state("home", {

                // Use a url of "/" to set a state as the "index".
                url: "/",

                templateUrl: 'app/home.html',

                controller: ['$rootScope', '$scope', '$state', 'HotspotsManager', '$log', 'VeevaMessaging', '$localStorage',
                    function($rootScope, $scope, $state, HotspotsManager, $log, VeevaMessaging, $localStorage) {
                        $rootScope.hideProgress = true;    //  EDIT ME for the home controller.  First view displayed.  Associated with the home.html view.
                        $rootScope.hideHeader = true;

						

                        var thisState = "home";
                        if( !HotspotsManager.isReady() ){
                            HotspotsManager.loadHotspots(function(data){
                                $scope.hotspots = HotspotsManager.getNavigationHotspots().concat(HotspotsManager.getHotspotsByState(thisState));
                            });
                        } else {
                            $scope.hotspots = HotspotsManager.getNavigationHotspots().concat(HotspotsManager.getHotspotsByState(thisState));
                        }

                        $scope.requestViewState = function(request) {

                            if( request.indexOf("javascript") != -1 ){
                                // put js code here
                            } else {
                                VeevaMessaging.sendMessage(request);
                            }
                           //  $state.go(nextViewState, {});
                            $log.debug("loading next view: " + request);
                        };
                        
                        
                        /********  gesture code begin ******/
                        
                                    $scope.handleTouchEvent = function(evtRequest) {
                                            if( evtRequest == "none" || evtRequest == "" || evtRequest == "undefined"){
                                                return;
                                            } else if ( evtRequest.indexOf("javascript") != -1 ){  // if you want to call a javascript function from a hotspot define the action in config/hotspots.json
                                                // put js code here                                            
                                            } else {
                                                VeevaMessaging.sendMessage(evtRequest);
                                            }                                         
                                    };

                                  	$scope.onTap = function(next_state, gesture) {    // EDIT ME this is how you can limit which gesture events are available.  defined in config/hotspots.json
                                    	 $scope.handleTouchEvent(next_state, gesture);
                                    };
                                                                      
                                    $scope.onSwipe = function(next_state, gesture) {                                    
                                    	 $scope.handleTouchEvent(next_state, gesture);                                                                                              	                            
                                    };    
                          
									if ( !$localStorage.efficacy_state ){
										$localStorage.efficacy_state = "viewTemplate.home";
									}	

                                    setTimeout(function () {
											VeevaMessaging.sendMessage($localStorage.efficacy_state);
                                    }, 250); 									
												
									
									
									
									
                                    
                        
                    }
                ]
            })
        }
    ]
)

.factory('Hotspot_Manager', ['$interval', '$log', function($interval, $log) {
    var messageQueue = [];

    function log() {
        if (messageQueue.length) {
            $log.log('batchLog messages: ', messageQueue);
            messageQueue = [];
        }
    }

    // start periodic checking
    $interval(log, 50000);

    return function(message) {
        messageQueue.push(message);
    }
}]);

