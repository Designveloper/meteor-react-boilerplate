export default {
  increaseCounter1() {
    console.log(this.He.getProps());
    this.L.decreaseCounter2();
    this.dict.set('counter1', this.dict.get('counter1') + 1);
  },
  decreaseCounter1() {
    this.dict.set('counter1', this.dict.get('counter1') - 1);
  },
  increaseCounter2() {
    this.L.decreaseCounter1();
    this.dict.set('counter2', this.dict.get('counter2') + 1);
  },
  decreaseCounter2() {
    this.dict.set('counter2', this.dict.get('counter2') - 1);
  },
};
