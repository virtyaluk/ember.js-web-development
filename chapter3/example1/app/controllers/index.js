import Ember from 'ember';

export default Ember.Controller.extend({
	name: 'Bohdan',
	edit: true,
	actions: {
		changeEdit: function() {
			this.toggleProperty('edit');
		}
	}
});

