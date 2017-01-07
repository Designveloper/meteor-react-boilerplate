// import store from './store.js';

export default {
  getCounter1(store) {
    return store.dict.get('counter1');
  },
  getCounter2(store) {
    return store.dict.get('counter2');
  },
  getCounter3(store) {
    return store.dict.get('counter3');
  },
  getTotalCount() {
    return this.getCounter1() + this.getCounter2() + this.getCounter3();
  },
  getmultiplier(store) {
    return parseInt(store.props.multiplier, 10);
  },
};
