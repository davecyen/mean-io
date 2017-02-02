'use strict';

import 'angular/angular-csp.css';
import 'angular-ui-select/select.min.css';
import 'angular-material/angular-material.min.css';

import jQuery from 'jquery';
import 'angular';
import 'angular-ui-select/select';
import 'angular-mocks';
import 'angular-cookies';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-jwt';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';

window.$ = jQuery;

angular.element(document).ready(function () {
  // Fixing facebook bug with redirect
  if (window.location.hash === '#_=_') {
    window.location.hash = '#!';
  }

  // Then init the app
  angular.bootstrap(document, ['mean']);
});

function processModules (modules) {
  var packageModules = ['ngCookies', 'ngResource', 'ui.router', 'ui.select', 'ngSanitize', 'ngMaterial'];
  var m;
  var mn;
  for (var index in modules) {
    m = modules[index];
    mn = 'mean.' + m.name;
    angular.module(mn, m.angularDependencies || []);
    packageModules.push(mn);
  }

  var req = require.context('./packages', true, /\/public\/(?!tests|assets|views)(.*)\.js$/);
  req.keys().map(req);
  req = require.context('./node_modules', true, /\/meanio-(.*)\/public\/(?!tests|assets|views)(.*)\.js$/);
  req.keys().map(req);
  angular.module('mean', packageModules)
  .config(function($mdThemingProvider) {
    $mdThemingProvider.definePalette('roomblockerPalette', {
    '50': 'e6e7e8',
    '100': 'c0c2c5',
    '200': '969a9f',
    '300': '6c7279',
    '400': '4d535c',
    '500': '2d353f',
    '600': '283039',
    '700': '222831',
    '800': '1c2229',
    '900': '11161b',
    'A100': 'c8aa76',
    'A200': 'b69a68',
    'A400': 'a18a60',
    'A700': 'a18a60',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light

    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('roomblockerPalette')
    .accentPalette('roomblockerPalette')
  });
}

jQuery.ajax('/_getModules', {
  dataType: 'json',
  async: false,
  success: processModules
});
