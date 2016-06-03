import { createContainer } from 'meteor/react-meteor-data';

import { Counter } from '../../components/Counter/Counter.jsx';

const dict = new ReactiveDict('CounterContainer');

dict.set({
  counter1: 0,
  counter2: 0,
  counter3: 0,
});

import He from './helpers.js';
import Ha from './handlers.js';

export default createContainer((props) => {
  return {
    totalCount: He.getTotalCount(),
    totalCountMultiplied: He.getTotalCount() * He.getmultiplier(),
    counter1: He.getCounter1(),
    counter2: He.getCounter2(),
    counter3: He.getCounter3(),
    ...Ha,
  };
}, Counter);
