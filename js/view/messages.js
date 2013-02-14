define(function(require) {
	var $ = require('jquery')
	var Backbone = require('backbone')
	var template = require('text!../../template/newMessage.html')
	
	return Backbone.View.extend({
	  el: '.content',
	  initialize: function() {
	    this.render();
	  },
	  render: function() {
	    var self = this;
	   	this.$el.html('zia test');
	    return this;
	  }
	});
})