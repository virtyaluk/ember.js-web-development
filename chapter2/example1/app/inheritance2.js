import Ember from 'ember';

export default function() {
	console.log('./inheritance2');

	const base = Ember.Object.extend({
			baseProperty: true
		}),
		derived = base.extend({}),
		derviedObject = derived.create({
			derivedProperty: true
		});

	console.log(derviedObject.get('baseProperty'));
	console.log(derviedObject.get('derivedProperty'));

	const anotherDerivedObject = derived.create();
	
	console.log(anotherDerivedObject.get('derivedProperty'));
}