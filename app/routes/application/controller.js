import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  players: undefined,

  sortProperty: ['initiative:desc'],

  sortedPlayers: computed.sort('players', 'sortProperty'),

  actions: {
    addOne(player) {
      let _initiative = player.get('initiative');
      player.set('initiative', _initiative + 1);
    },

    takeAwayOne(player) {
      let _initiative = player.get('initiative');
      player.set('initiative', _initiative - 1);
    }
  }
});
