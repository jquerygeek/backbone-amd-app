require.config({
  paths: {
    jquery: "lib/jqMobi.min",
    underscore: "lib/lodash.custom.min",
    backbone: "lib/backbone-min",
    text: "lib/text"
  },
  shim: {
    'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    },
    'underscore': {
        exports: '_'
    }
  }
});

define(["jquery", "underscore", "backbone"],
    function ($, _, Backbone) {

      var AppRouter = Backbone.Router.extend({
          initialize: function() {
            console.log(Backbone.history)
            Backbone.history.start();
          },
          routes: {
            "": "newMessage"
          },
          newMessage: function() {
            console.log('zia-test')
          }
      });

      new AppRouter();

    }
);