import DS from 'ember-data';

export default DS.Model.extend({
    street: DS.attr('string'),
    locality: DS.attr('string'),
    houseNo: DS.attr('number'),
    user: DS.belongsTo('user')
});
