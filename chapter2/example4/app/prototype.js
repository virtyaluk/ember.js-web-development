export default function() {
	console.log([1, 2, 3].get('lastObject'));
	console.log([1, 2, 3, 4, 5, 6, 7].filter(item => item < 5));
	console.log('ember js'.capitalize());
	console.log('my var'.camelize());
	console.log('my var'.classify());
}
