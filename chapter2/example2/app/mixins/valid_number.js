import Ember from 'ember';

export default Ember.Mixin.create({
    valid: number => !isNaN(number)
});