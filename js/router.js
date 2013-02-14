define(function(require) {
	var Backbone = require('backbone')
	var MessagesView = require('view/messages')

	return Backbone.Router.extend({
		initialize: function() {
		  console.log(Backbone.history)
	      Backbone.history.start();
	    },
	    routes: {
	      "": "newMessage"
	    },
	    newMessage: function() {
	    	console.log('zia-test')
	    	var newMessage = new MessagesView();
	    }
	});
});