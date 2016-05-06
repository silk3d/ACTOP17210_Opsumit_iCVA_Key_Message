/********  Made the Webservice path a constant so that we can change it according to our deploy config  ****/

angular.module('TouchPanelPresenter.config', [])
    .constant('APP_VERSION','0.1')
    .constant('LOGGING_ENABLED',true)
    .constant("HOTSPOTS_OPACITY", "opacity:0.0;")
    .constant("KEY_MESSAGE_ID", "ops-icva-baseline-characteristics.zip");


/*******  The HOTSPOTS OPACITY sets the opacity of all application hotspots.                      **/
/**   Hotspot colors are determined in the hotspots.json file location here config/hotspots.json  **/
/**   Logging turns on the logging functionality of Angularjs e.g.  $log("log error here");
/**                                                                      **/
/**************************************************************************/