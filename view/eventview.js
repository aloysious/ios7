KISSY.add('ios7/view/eventview', function (S, Base, NODE) {

	"use strict";

	function EventView(id, cfg) {
		if (this instanceof EventView) {

			this.con = S.one(id);

			EventView.superclass.constructor.call(this, cfg);
			this.init();

		} else {
			return new EventView(id,cfg);
		}
	}

	S.extend(EventView, Base, {

		init: function() {
			// your code here
		},
		
		show: function() {
			this.con.show();
		},

		hide: function() {
			this.con.hide();
		}

	});

	return EventView;

}, {
	requires: ['base','node']
});
