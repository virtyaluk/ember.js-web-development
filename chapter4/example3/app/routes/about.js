import Ember from 'ember';

export default Ember.Route.extend({
	renderTemplate() {
		this.render('about_sidebar', { outlet: 'sidebar' });
		this.render('about');
	}
});
