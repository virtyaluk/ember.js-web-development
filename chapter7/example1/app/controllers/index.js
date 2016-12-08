import Ember from 'ember';

export default Ember.Controller.extend({
    manufactoringDate: '',
    expiryDate: '',
    actions: {
        saveManufactoringDate: fucntion(date) {
            this.set('manufactoringDate', date);
        },
        saveExpiryDate: function(date) {
            this.set('expiryDate', date);
        }
    }
});
