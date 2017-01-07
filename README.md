# Meteor React Boilerplate

To init the app please run:

    npm install

To start server please run:

    meteor

The app will be served at [localhost:3000](http://localhost:3000)

The slides will be served at [Meteor - Structuring React Container](http://localhost:3000/slides/slides.html)

## Structure

```
app_root
|__client
   |  ...
|__imports
   |__startup
   |__ui
      |__components
      |__layouts
      |__lib
         |  ReactiveContainer.js
      |__pages
         |__CounterContainer
            |__CounterContainer.js
            |__helpers.js
            |__handlers.js
            |__logicFuncs.js
   |
|__server
   |  ...
```

## Usage


```javascript
// helpers.js - these are "get" functions
export default {
  getCounter1(store) {
    return store.dict.get('counter1');
  },
  getmultiplier(store) {
    return parseInt(store.props.multiplier, 10);
  },
};

// handlers.js - these are handlers used by children of the container
export default {
  clickCounter1Handler(L) {
    L.increaseCounter1();
  },
  clickCounter2Handler(L) {
    L.increaseCounter2();
  }
}

// logicFuncs.js - these are functions used to mutate the database or container's state
export default {
  setCounter1(store, He, val) {
    store.dict.set('counter1', val);
  },
  setCounter2(store, He, val) {
    store.dict.set('counter2', val);
  },
  decreaseCounter2(store, He) {
    this.setCounter2(He.getCounter2() - 1);
  },
};

// CounterContainer.js - this is the container
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
```

This document does not contain enough information about how to use this pattern, so it could be very hard to get your head around this pattern. I do not have any interest in writing further, so if you are curious you could consult the slide comes in this repo or drop me a line.

## Takeaways

- This pattern follows dependency injection principle
- There could be many instances of ReactiveContainer, remember to provide different instances of ReactiveDict
- Separation of concerns: helpers, handlers, and logic functions
