import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

import timeManager from './time_manager';
import father from './father';
import child from './child';
import prototype from './prototype';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

const myTimeManager = timeManager.create({
	time: 12
});

myTimeManager.set('time', 45);

const darren = father.create({
		name: 'Darren',
		age: 40,
		address: 'Brisbane'
	}),
	dan = child.create({
		school: 'Brisbane State Hight School',
		father: darren
	});

console.log(darren.get('address'));

darren.set('address', 'Sydney');

console.log(dan.get('address'));

prototype();

export default App;
