var app = angular.module("InventoryApp", ["RackinApp", "ngSanitize"]);
app.controller("InventoryCtrl",
    function($scope, $firebaseArray, $mdDialog) {
      $scope.RackItem = $firebaseArray(
        firebase.database().ref().child("RackItem")
        );
      $scope.Model = $firebaseArray(
        firebase.database().ref().child("Model")
        );
      $scope.mode = 'list';
      $scope.RackItemNew = null;
      $scope.newRackItem = function() {
        $scope.RackItem.$add($scope.RackItemNew);
        $scope.mode = 'list';
      };
      $scope.viewRackItem = function(item, ev) {
        $mdDialog.show(
          $mdDialog.confirm()
          .title(item.Model + " (" + item.AssetTag + ")")
          .clickOutsideToClose(true)
          .htmlContent(
            "<ul><li><b>Model:</b> " + item.Model
            + "</li><li><b>Associated RU:</b> " + item.ASsociatedRU
            + "</li><li><b>Label:</b> " + item.Label
            + "</li><li><b>Asset Tag:</b> " + item.AssetTag
            + "</li><li><b>Serial Number:</b> " + item.SN
            + "</li><li><b>Description:</b> " + item.Description
            + "</li><li><b>Direction:</b> " + item.Direction
            + "</li><li><b>Location:</b> " + item.Location
            + "</li><li><b>SystemPower:</b> " + item.SystemPower
            + "</li><li><b>HeatDissipation:</b> " + item.HeatDissipation
            + "</li><li><b>Plugs:</b> " + item.Plugs
            + "</li><li><b>Ports:</b> " + item.Ports + "</li></ul>")
          .ok('Close')
          .cancel('Delete this item')
          .targetEvent(ev)
          ).then(function() {}, function() {
            $scope.deleteRackItem(item, ev);
          });
      };
      $scope.deleteRackItem = function(item, ev) {
        $mdDialog.show(
            $mdDialog.confirm()
            .title("Delete Item")
            .htmlContent("<p>You are about to delete <b>" + item.Model + "</b> " + item.AssetTag + " from the database. Are you sure you would like to continue?</p>")
            .ok('Cancel')
            .cancel('Delete')
            .targetEvent(ev)
            ).then(function() {
            }, function() {
              $scope.RackItem.$remove(item);
            });
      };
    });

