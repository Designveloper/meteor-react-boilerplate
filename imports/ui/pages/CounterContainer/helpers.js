
export default {
  getCounter1() {
    return dict.get('counter1');
  },
  getCounter2() {
    return dict.get('counter2');
  },
  getCounter3() {
    return dict.get('counter3');
  },
  getTotalCount() {
    return this.getCounter1() + this.getCounter2() + this.getCounter3();
  },
  getmultiplier() {
    return parseInt(props.multiplier, 10);
  },
};
