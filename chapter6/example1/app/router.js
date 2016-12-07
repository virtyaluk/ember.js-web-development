import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.resource('books', function() {
        this.route('book', { path: '/:id' });
        this.route('new');
    });
});

export default Router;
