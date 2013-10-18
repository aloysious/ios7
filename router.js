KISSY.add('ios7/router', function (
			S, 
			Base, 
			NODE,
			Anim,
			Backbone,
			ClockView,
			EventView
	) {

	"use strict";

	/*
	function Router(cfg) {
		if (this instanceof Router) {
			Router.superclass.constructor.call(this, cfg);
			this.init();

		} else {
			return new Router(cfg);
		}
	}

	S.extend(Router, Backbone.Router, {

		initialize: function() {
			// your code here

		}
	});
	*/

	var Router = Backbone.Router.extend({
		initialize: function() {
			this.stage = NODE.one('#J_stage');
			this.clockView = new ClockView('#J_clock');
			this.eventView = new EventView('#J_event');	
			this.isFirstLoad = true;
		},

		routes: {
			'' : '_clock',
			'!event' : '_event'
		},

		_deploy: function(first) {
			var second = [].slice.call(arguments, 1);

			S.each(second, function(item) {
				item.hide();
			});
			first.show();
			this.isFirstLoad = null;
		},

		_clock: function() {
			if (this.isFirstLoad) {
				this._deploy(this.clockView, this.eventView);
			} else {
				this._pageTransition(this.eventView, this.clockView, 'right');
			}
		},

		_event: function() {
			if (this.isFirstLoad) {
				this._deploy(this.eventView, this.clockView);
			} else {
				this._pageTransition(this.clockView, this.eventView);
			}
		},
		
		_pageTransition: function(left, right, dir){
			var that = this,
				layX = 50,
				isLeft = dir && dir == 'right';
			//!isLeft && (that.prevScroll = window.pageYOffset);
			console.log(isLeft);
			
			var fx = isLeft && (-layX + '%') || 0,
				rx = !isLeft && (-layX + '%') || 0,
				parent = that.stage,
				gv1 = 'translate3d(',
				gv2 = ',0)';

			console.log(fx);
			console.log(rx);
			right.show();
			parent.css({'width' : '200%','-webkit-transform' : (gv1 + fx + ',0' + gv2)});
			setTimeout(function(){
				new Anim(parent, {
						'translate3d': (gv1 + rx + ',0' + gv2)
					}, 3, 'easeOut', function() {
						left.hide();
						parent.css({'width':'', '-webkit-transform':''});
						//if(isLeft){that.prevScroll && scrollTo(0,that.prevScroll);}
						//else{scrollTo(0,0);}
						//setTimeout(function(){
						//	right.trigger('first:action');
						//},10);
				}).run();
			}, 10);
		},

		start : function(){
			Backbone.history.start();
		}
	});

	return Router;

}, {
	requires: [
		'base',
		'node', 
		'anim',
		'ios7/libs/backbone',
		'ios7/view/clockview',
		'ios7/view/eventview'
	]
});
