myApp.controller('EditableTableCtrl', ['$scope', 'ServicesFactory', function($scope, ServicesFactory, $filter, $http, $q) {
    console.log('Admin Controller!');

    $scope.ServicesFactory = ServicesFactory;
    $scope.users = [];
    $scope.ServicesFactory.factoryGetPrices();

    $scope.$watch($scope.ServicesFactory.watchservicesObjects, function(newValue, oldValue){
            $scope.users = $scope.ServicesFactory.watchservicesObjects();
            console.log($scope.users);

    });

    var getServices = function() {
    $scope.users = $scope.ServicesFactory.watchservicesObjects();
    };



    $scope.showStatus = function(user) {
        var selected = [];
        if(user.status) {
            selected = $filter('filter')($scope.statuses, {value: user.status});
        }
        return selected.length ? selected[0].text : 'Not set';
    };

    $scope.updateService = function(data, id) {
        console.log("$scope.$data", data);
        $scope.ServicesFactory.factoryUpdateService(object).then(function() {
            getServices();
            });
    };

    // filter users to show
    $scope.filterUser = function(user) {
        return user.isDeleted !== true;
    };

    // mark user as deleted
    $scope.deleteUser = function(id) {
        var filtered = $filter('filter')($scope.users, {id: id});
        if (filtered.length) {
            filtered[0].isDeleted = true;
        }
    };

    // add user
    $scope.addUser = function() {
        $scope.users.push({
            id: $scope.users.length+1,
            name: '',
            status: null,
            group: null,
            isNew: true
        });
    };

    // cancel all changes
    $scope.cancel = function() {
        for (var i = $scope.users.length; i--;) {
            var user = $scope.users[i];
            // undelete
            if (user.isDeleted) {
                delete user.isDeleted;
            }
            // remove new
            if (user.isNew) {
                $scope.users.splice(i, 1);
            }
        }
    };

    // save edits
    $scope.saveTable = function() {
        var results = [];
        for (var i = $scope.users.length; i--;) {
            var user = $scope.users[i];
            // actually delete user
            if (user.isDeleted) {
                $scope.users.splice(i, 1);
            }
            // mark as not new
            if (user.isNew) {
                user.isNew = false;
            }

            // send on server
            results.push($scope.ServicesFactory.factoryUpdateService(user).then(function() {
                getServices();
                })
            )
        }

        return $q.all(results);
    };

}]);

myApp.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
});