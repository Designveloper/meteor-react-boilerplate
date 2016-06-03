import store from './store.js';

export default {
  getCounter1() {
    return store.dict.get('counter1');
  },
  getCounter2() {
    return store.dict.get('counter2');
  },
  getCounter3() {
    return store.dict.get('counter3');
  },
  getTotalCount() {
    return this.getCounter1() + this.getCounter2() + this.getCounter3();
  },
  getmultiplier() {
    return parseInt(store.props.multiplier, 10);
  },
};
