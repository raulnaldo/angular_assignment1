(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController ($scope, $filter) {
//  $scope.myMessage = function () {
//    return $scope.menu_items;
//  };
  $scope.myMessage="";
  $scope.menu_items="";
  $scope.separeMenuItems = function () {
      $scope.myMessage="";
      var totalItems=CountItemsFromString($scope.menu_items);      
      if (totalItems == 0){
        $scope.myMessage="Please enter data first";
      }
      else{
        if (totalItems < 4){
          $scope.myMessage="Enjoy!";          
        }       
        else{
            $scope.myMessage="Too much!";         
        }
      }
  };

  //function for counting items without spaces.
  var CountItemsFromString = function(pString){
    var myTotalItems=0;
    var arrayOfStrings = pString.split(',');    
    for (var i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i] != ""){
        myTotalItems=myTotalItems+1;
      }
    }
    return myTotalItems;
  };
}

})();
