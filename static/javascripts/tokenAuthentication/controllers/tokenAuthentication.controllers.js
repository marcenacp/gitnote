'use strict';

function set_user(response){
  var source;
  if (response){
      source = response.data;
  } else {
    source = {
      'username': null,
      'first_name': null,
      'last_name': null,
      'email': null
    };
  }
  self.user.username = source.username;
  self.user.first_name = source.first_name;
  self.user.last_name = source.last_name;
  self.user.email = source.email;
};

angular
  .module('gitnote.tokenAuthentication')
  .controller('LoginTokenCtrl', function($scope, $auth, $http) {
    self = this;
    self.user = {};
    set_user();
    if ($auth.getToken()){
      $http.get(currentUserToken).then(function(response){
        set_user(response);
      });
    }
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider).then(function(response){
        $auth.setToken(response.data.token);
        set_user(response);
      });
    };
    $scope.logout = function(){
      $auth.removeToken();
      set_user();
    };
  });

