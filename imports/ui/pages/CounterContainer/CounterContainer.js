import { createContainer } from 'meteor/react-meteor-data';

import { Counter } from '../../components/Counter/Counter.jsx';

import He from './helpers.js';
import Ha from './handlers';
import L from './logicFuncs.js';

function bindObject(object, args) {
  const newObj = {};
  for (const func in object) {
    if (object.hasOwnProperty(func)) {
      newObj[func] = object[func].bind(newObj, ...args);
    }
  }

  return newObj;
}

class ReactiveContainer {
  constructor(f, {
    helpers,
    handlers,
    logics,
    dictionary,
  }, component) {
    const store = {
      props: {},
      dict: dictionary,
    };

    const newHelpers = bindObject(helpers, [store]);
    const newLogics = bindObject(logics, [store, newHelpers]);
    const newHandlers = bindObject(handlers, [newLogics]);

    return createContainer((props) => {
      store.props = props;

      return {
        ...newHandlers,
        ...f.apply(undefined, [store, newHelpers, newLogics]),
      };
    }, component);
  }
}

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
