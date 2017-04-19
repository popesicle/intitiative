import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model() {
    return this.store.findAll('player');
  },

  setupController: function(controller, model) {
    controller.set('players', model);
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
