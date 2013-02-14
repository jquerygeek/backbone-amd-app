require.config({
  paths: {
    jquery: "lib/jqMobi.min",
    underscore: "lib/lodash.custom.min",
    backbone: "lib/backbone-min",
    text: "lib/text",
  }
});

define(function(require) {
  var $ = require('jquery')
  var _ = require('underscore')
  var Backbone = require('backbone')
  var AppRouter = require('router')
  
  // start the router
  new AppRouter()
});
