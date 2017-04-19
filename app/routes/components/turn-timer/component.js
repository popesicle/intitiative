import Ember from 'ember';

const {
  Component,
  run
} = Ember;

export default Component.extend({
  count: 0,

  countUp() {
    let interval = 1000;
    run.later(this, function() {
      let _count = this.get('count');
      this.set('count', _count + 1);
      this.countUp();
    }, interval);
  },

  didInsertElement() {
    this.countUp();
  },

  actions: {
    resetTimer() {
      this.set('count', 0);
    }
  }
});
