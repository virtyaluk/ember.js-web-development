import Ember from 'ember';

export default Ember.Mixin.create({
   onFocus: () => {
     console.log("do something creative on focus");
   }
});
