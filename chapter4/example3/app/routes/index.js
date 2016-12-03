import Ember from 'ember';

export default Ember.Route.extend({
	renderTemplate() {
		this.render('sidebar', { outlet: 'sidebar' });
		this.render('index');
	}
});
