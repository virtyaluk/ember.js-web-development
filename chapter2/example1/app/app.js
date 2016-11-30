import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

import inheritance1 from './inheritance1';
import inheritance2 from './inheritance2';
import inheritance3 from './inheritance3';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

inheritance1();
inheritance2();
inheritance3();

export default App;
