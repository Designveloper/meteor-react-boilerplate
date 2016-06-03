import { createContainer } from 'meteor/react-meteor-data';

import { Counter } from '../../components/Counter/Counter.jsx';

import store from './store.js';

import He from './helpers.js';
import Ha from './handlers.js';


export default createContainer((props) => {
  store.props = props;
  return {
    totalCount: He.getTotalCount(),
    totalCountMultiplied: He.getTotalCount() * He.getmultiplier(),
    counter1: He.getCounter1(),
    counter2: He.getCounter2(),
    counter3: He.getCounter3(),
    ...Ha,
  };
}, Counter);
