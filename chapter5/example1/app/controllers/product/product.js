import Ember from 'ember';

export default Ember.Controller.extend({
    formattedPrice: function() {
        return `${this.get('symbol')} ${$.number(this.get('price'), 2)}`;
    }.property('symbol', 'price'),

    formattedDimension: function() {
        return `${this.get('dimensions.width')} x ${this.get('dimensions.height')} x ${this.get('dimensions.length')}`;
    }.property('dimensions.width', 'dimensions.height', 'dimensions.length'),

    shortDescription: function() {
        return `${this.get('description').substring(0, 25)}...`;
    }.property('description')
});
