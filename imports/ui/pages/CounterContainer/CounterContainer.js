import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

import { Counter } from '../../components/Counter/Counter.jsx';

Session.set({
  counter1: 0,
  counter2: 0,
  counter3: 0,
});

function getCounter1() {
  return Session.get('counter1');
}

function getCounter2() {
  return Session.get('counter2');
}

function getCounter3() {
  return Session.get('counter3');
}

function getTotalCount() {
  return getCounter1() + getCounter2() + getCounter3();
}

function setCounter1(val) {
  Session.set('counter1', val);
}

function setCounter2(val) {
  Session.set('counter2', val);
}

function setCounter3(val) {
  Session.set('counter3', val);
}

function increaseCounter1() {
  setCounter1(getCounter1() + 1);
}

function increaseCounter2() {
  setCounter2(getCounter2() + 1);
}

function increaseCounter3() {
  setCounter3(getCounter3() + 1);
}

function decreaseCounter1() {
  setCounter1(getCounter1() - 1);
}

function decreaseCounter2() {
  setCounter2(getCounter2() - 1);
}

function getmultiplier({ multiplier }) {
  return parseInt(multiplier, 10);
}

export default createContainer((props) => {
  return {
    totalCount: getTotalCount(),
    totalCountMultiplied: getTotalCount() * getmultiplier(props),
    counter1: getCounter1(),
    counter2: getCounter2(),
    counter3: getCounter3(),
    clickCounter1Handler() {
      increaseCounter1();
    },
    clickCounter2Handler() {
      increaseCounter1();
      increaseCounter2();
    },
    clickCounter3Handler() {
      decreaseCounter1();
      decreaseCounter2();

      increaseCounter3();
    },
  };
}, Counter);
