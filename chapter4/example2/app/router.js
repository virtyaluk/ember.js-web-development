import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.resource('commits', function() {
        this.route('commit', { path: ':sha' });
    });
});

export default Router;
