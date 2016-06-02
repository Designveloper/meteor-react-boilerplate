export default {
  clickRootHandler() {
  },
  clickCounter1Handler() {
    this.L.increaseCounter1();
  },
  clickCounter2Handler() {
    this.L.increaseCounter1();
    this.L.increaseCounter2();
  },
  clickCounter3Handler() {
    this.L.decreaseCounter1();
    this.L.decreaseCounter2();

    this.L.increaseCounter3();
  },
};
