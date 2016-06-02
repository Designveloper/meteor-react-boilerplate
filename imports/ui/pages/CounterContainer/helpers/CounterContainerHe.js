export default {
  getProps() {
    return this.props;
  },
  getCounter1() {
    return this.dict.get('counter1');
  },
  getCounter2() {
    return this.dict.get('counter2');
  },
  getCounter3() {
    return this.dict.get('counter3');
  },
  getTotalCount() {
    return this.He.getCounter1() + this.He.getCounter2() + this.He.getCounter3();
  },
};
