import { createContainer } from 'meteor/react-meteor-data';
import { ReactiveDict } from 'meteor/reactive-dict';

import { bindFuncInObj } from '../../lib/bindFunctionsInObj.js';

import He from './helpers';
import L from './logicFuncs';
import Ha from './handlers';

import { Test } from '../../components/Test/Test.jsx';

const dict = new ReactiveDict('TestContainerDict');
dict.setDefault('counter1', 0);
dict.setDefault('counter2', 0);

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
    counter1: dict.get('counter1'),
    counter2: dict.get('counter2'),
    ...sHa,
  };
}, Test);
