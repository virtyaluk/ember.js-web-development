import Ember from 'ember';

export default Ember.Helper.helper(([value, ...rest], { length } = { length: 40 }) => {
	
	if (!Ember.isEmpty(value)) {
		if (value.length < length) {
			return value;
		}

		return value.substring(0, length) + '...';
	}

	return '';
});
