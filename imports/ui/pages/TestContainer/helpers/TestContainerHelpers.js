export default {
  getProps() {
    console.log(this.He.getTotalCount());
    return this.props;
  },
  getTotalCount() {
    return this.dict.get('counter1') + this.dict.get('counter2');
  },
};
