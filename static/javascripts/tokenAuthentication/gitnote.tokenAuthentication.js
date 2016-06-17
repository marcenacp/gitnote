'use strict';

angular
  .module('gitnote.tokenAuthentication', ['satellizer'])
  .config(function($authProvider) {
    $authProvider.github({
      url: githubSocialTokenUser,
      clientId: '835c2d955b89a00b12a9'
    });
    $authProvider.authToken = 'Token';
   });

