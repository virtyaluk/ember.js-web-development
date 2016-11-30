import Ember from 'ember';

export default function() {
	console.log('./inheritance3');

	const base = Ember.Object.extend({
			baseProperty: true
		}),
		derived = base.extend({});

	derived.reopen({
		derivedProperty: true
	});

	const derviedObject = derived.create({});

	console.log(derviedObject.get('baseProperty'));
	console.log(derviedObject.get('derivedProperty'));

	const anotherDerivedObject = derived.create();

	console.log(anotherDerivedObject.get('derivedProperty'));
}