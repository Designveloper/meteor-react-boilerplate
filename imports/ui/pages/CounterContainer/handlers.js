import L from './logicFuncs.js';

export default {
  clickCounter1Handler() {
    L.increaseCounter1();
  },
  clickCounter2Handler() {
    L.increaseCounter1();
    L.increaseCounter2();
  },
  clickCounter3Handler() {
    L.decreaseCounter1();
    L.decreaseCounter2();

    L.increaseCounter3();
  },
};
