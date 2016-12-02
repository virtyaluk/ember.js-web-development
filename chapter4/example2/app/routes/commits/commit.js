import Ember from 'ember';

export default Ember.Route.extend({
	model: params => Ember.$.getJSON(`https://api.github.com/repos/emberjs/ember.js/commits/${params.sha}`),
	serialize: model => ({ sha: model.sha })
});
