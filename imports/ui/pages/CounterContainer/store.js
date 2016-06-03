import { ReactiveDict } from 'meteor/reactive-dict';

export const dict = new ReactiveDict('CounterContainer');

dict.set({
  counter1: 0,
  counter2: 0,
  counter3: 0,
});


export default {
  props: {},
  dict,
};
