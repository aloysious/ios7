KISSY.add('ios7/main', function (S, Base, NODE, Router) {

	"use strict";

	function Main(cfg) {
		console.log('main');
		if (this instanceof Main) {
			Main.superclass.constructor.call(this, cfg);
			this.init();

		} else {
			return new Main(cfg);
		}
	}

	S.extend(Main, Base, {

		init: function() {
			console.log('init');
			this.router = new Router();
			this.router.start();
		},

		destory: function(){

		}
	});

	return Main;

}, {
	requires: ['base','node', 'ios7/router']
});
