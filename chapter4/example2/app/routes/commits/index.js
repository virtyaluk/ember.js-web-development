import Ember from 'ember';

export default Ember.Route.extend({
	model: () => Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/commits')
});
