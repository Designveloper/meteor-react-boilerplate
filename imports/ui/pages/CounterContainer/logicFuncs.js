import He from './helpers.js';;

export default {
  setCounter1(val) {
    dict.set('counter1', val);
  },
  setCounter2(val) {
    dict.set('counter2', val);
  },
  setCounter3(val) {
    dict.set('counter3', val);
  },

  increaseCounter1() {
    this.setCounter1(He.getCounter1() + 1);
  },

  increaseCounter2() {
    this.setCounter2(He.getCounter2() + 1);
  },

  increaseCounter3() {
    this.setCounter3(He.getCounter3() + 1);
  },

  decreaseCounter1() {
    this.setCounter1(He.getCounter1() - 1);
  },

  decreaseCounter2() {
    this.setCounter2(He.getCounter2() - 1);
  },

};
