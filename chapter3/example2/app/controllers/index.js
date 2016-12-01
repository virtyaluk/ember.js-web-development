import Ember from 'ember';

export default Ember.Controller.extend({
	className: 'red',
	actions: {
		toggleColor: () => {
			this.set('className', this.get('className') === 'red' ? 'blue' : 'red');
		},
		alert: () => {
			console.log('controller alert');

			return true;
		}
	}
});
