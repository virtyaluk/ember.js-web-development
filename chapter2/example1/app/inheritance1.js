import Ember from 'ember';

export default function() {
	console.log('./inheritance1');
	console.log("using plain JavaScript");

	const base1 = {
			baseProperty: true 
		},
		derived1 = Object.create(base1);
	
	console.log(derived1.baseProperty);
	console.log("using Ember.js");

	const base2 = Ember.Object.extend({
			baseProperty: true
		}),
		derived2 = base2.extend({
			derivedProperty:false
		}),
		derivedObject = derived2.create();
	
	console.log(derivedObject.get('baseProperty'));
	console.log(derivedObject.get('derivedProperty'));
}
