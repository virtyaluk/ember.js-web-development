import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		toggleMenu() {
			$('#wrapper').toggleClass('active');
    	}
  	}
});
