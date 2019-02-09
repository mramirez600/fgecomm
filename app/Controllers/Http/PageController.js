'use strict';

class PageController {
	about({ view }) {
		return view.render('pages/about');
	}
	home({ view }) {
		return view.render('pages/home');
	}
}

module.exports = PageController;
