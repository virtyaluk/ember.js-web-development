import Ember from 'ember';

export default Ember.Controller.extend({
    tagName: function() {
        return 'p'
    }.property()
});
