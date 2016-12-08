import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return {
            MRP: '$ 1000',
            price: '$80',
            sale: '$20'
        };
    }
});
