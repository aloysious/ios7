KISSY.add('ios7/view/clockview', function (S, Base, NODE, EVENT) {

	"use strict";

	function ClockView(id, cfg) {
		if (this instanceof ClockView) {

			this.con = S.one(id);

			ClockView.superclass.constructor.call(this, cfg);
			this.init();

		} else {
			return new ClockView(id,cfg);
		}
	}

	S.extend(ClockView, Base, {

		init: function() {
			// your code here
			var that = this;

			EVENT.on('.show-toast', 'tap', function(e) {
				NODE.one('#J_mask').show();
				that.con.addClass('blur');
				that._showToast('You tap ' + NODE.one(e.currentTarget).html());
			});
			EVENT.on('#J_mask', 'tap', function(e) {
				NODE.one('#J_mask').hide();
				that.con.removeClass('blur');
				NODE.one('#J_toast').hide();
			});


		},
		
		_showToast: function(tip) {
			NODE.one('#J_toast').one('.content').html(tip);
			NODE.one('#J_toast').show();
		},

		show: function() {
			this.con.show();
		},

		hide: function() {
			this.con.hide();
		}

	});

	return ClockView;

}, {
	requires: ['base','node', 'event']
});
