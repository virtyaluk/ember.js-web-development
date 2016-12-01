import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		alert: message => {
			const appController = this.controllerFor('application');

			appController.set('className', 'alert');
			appController.set('message', message);

			Ember.run.later(() => { appController.set('className', 'hide'); }, 2000);
		}
	}
});
