import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model() {
    return this.store.findAll('player');
  },

  actions: {
    createPlayer(name, init) {
      let player = this.store.createRecord('player', {
        name: name,
        initiative: init
      });

      player.save();
    }
  }
});
