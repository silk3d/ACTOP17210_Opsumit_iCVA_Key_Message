angular.module('MegaWall.utils.service', [

])

.factory('utils', function ($rootScope) {
  return {
    // Util for finding an object by its 'id' property among an array
    findById: function findById(a, id) {
      for (var i = 0; i < a.length; i++) {
        if (a[i].id == id) return a[i];
      }
      return null;
    },

    // Util for returning a random key from a collection that also isn't the current key
    newRandomKey: function newRandomKey(coll, key, currentKey){
      var randKey;
      do {
        randKey = coll[Math.floor(coll.length * Math.random())][key];
      } while (randKey == currentKey);
      return randKey;
    },
      
      
    setNavigationItemSelected: function setNavigationItemSelected( navObj, selectedElement, itemList ) {
        var found = false;
        for(var i = 0; i < itemList.length; i++) {
            if( selectedElement == itemList[i] ) {
                navObj[itemList[i]] = "active selected";
                
                console.log("setting selected: ("+i+") " +itemList[i] );
                console.log("current: " +$rootScope.navigationStates.nav_order[i])
                console.log("next: " + $rootScope.navigationStates.nav_order[i+1])
                $rootScope.current = i+2;
                $rootScope.next = $rootScope.navigationStates.nav_order[i+1];
                found = true;
            } else if ( found ) {
                   navObj[itemList[i]] = "";
            } else {
                 navObj[itemList[i]] = "active";
            }     
        }
        return navObj;
    },
      
    getButtonSizeForListLength:function getButtonSizeForListLength( numItems ) {
      var finalButtonSize = "small";
      
      if( numItems == 1 ) {
            finalButtonSize = "large";
         } else if ( numItems == 2 ) {
            finalButtonSize = "medium";
         }   
    
        return finalButtonSize;
    },
      
      
    getItemCount:function getItemCount( itemsObj ) {
        var itemcount = 0;
        for(var itr in itemsObj )
            itemcount++;
        
        return itemcount;
    }
  };
});
