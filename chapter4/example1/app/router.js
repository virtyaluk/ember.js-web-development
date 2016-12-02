import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
	this.route('products', { path: '/products' }, function() {
		this.route('new');
	});
	this.route('about', { path: '/about' });
});

export default Router;
