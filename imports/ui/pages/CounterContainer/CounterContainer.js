import { ReactiveContainer } from '../../lib/ReactiveContainer.js';

import { Counter } from '../../components/Counter/Counter.jsx';

import He from './helpers.js';
import Ha from './handlers';
import L from './logicFuncs.js';

const dict = new ReactiveDict('CounterContainer');

dict.set({
  counter1: 0,
  counter2: 0,
  counter3: 0,
});

export default new ReactiveContainer(function(store, helpers, logics) {
  return {
    totalCount: helpers.getTotalCount(),
    totalCountMultiplied: helpers.getTotalCount() * helpers.getmultiplier(),
    counter1: helpers.getCounter1(),
    counter2: helpers.getCounter2(),
    counter3: helpers.getCounter3(),
  };
}, {
  helpers: He,
  handlers: Ha,
  logics: L,
  dictionary: dict,
}, Counter);
