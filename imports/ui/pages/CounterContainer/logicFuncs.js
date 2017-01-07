// import He from './helpers.js';
// import store from './store.js';

export default {
  setCounter1(store, He, val) {
    store.dict.set('counter1', val);
  },
  setCounter2(store, He, val) {
    store.dict.set('counter2', val);
  },
  setCounter3(store, He, val) {
    store.dict.set('counter3', val);
  },

  increaseCounter1(store, He) {
    this.setCounter1(He.getCounter1() + 1);
  },

  increaseCounter2(store, He) {
    this.setCounter2(He.getCounter2() + 1);
  },

  increaseCounter3(store, He) {
    this.setCounter3(He.getCounter3() + 1);
  },

  decreaseCounter1(store, He) {
    this.setCounter1(He.getCounter1() - 1);
  },

  decreaseCounter2(store, He) {
    this.setCounter2(He.getCounter2() - 1);
  },

};
