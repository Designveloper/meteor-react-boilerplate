import { createContainer } from 'meteor/react-meteor-data';
import { ReactiveDict } from 'meteor/reactive-dict';

import { bindFuncInObj } from '../../lib/bindFunctionsInObj.js';

import He from './helpers';
import L from './logicFuncs';
import Ha from './handlers';

import { Counter } from '../../components/Counter/Counter.jsx';

const dict = new ReactiveDict('CounterContainerDict');
dict.setDefault('counter1', 0);
dict.setDefault('counter2', 0);
dict.setDefault('counter3', 0);

const store = {
  props: {},
  dict,
  He: {},
  L: {},
};

store.He = bindFuncInObj(He, store);

store.L = bindFuncInObj(L, store);

const sHa = bindFuncInObj(Ha, {
  He: store.He,
  L: store.L,
});

export default createContainer((props) => {
  const {} = props;

  store.props = props;

  return {
    totalCount: store.He.getTotalCount(),
    counter1: store.He.getCounter1(),
    counter2: store.He.getCounter2(),
    counter3: store.He.getCounter3(),
    ...sHa,
  };
}, Counter);
