import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

import User from './user';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

const myUser = User.create({
	firstName: 'Bohdan',
	lastName: 'Shtepan'
});

console.log(myUser.get('fullName'));

myUser.set('firstName', 'Steven');
myUser.set('lastName', 'Rogers');

console.log(myUser.get('fullName'));

export default App;
