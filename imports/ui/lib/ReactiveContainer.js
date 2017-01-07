import { createContainer } from 'meteor/react-meteor-data';

function bindObject(object, ...args) {
  const newObj = {};
  for (const func in object) {
    if (object.hasOwnProperty(func)) {
      newObj[func] = object[func].bind(newObj, ...args);
    }
  }

  return newObj;
}

export class ReactiveContainer {
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

    const newHelpers = bindObject(helpers, store);
    const newLogics = bindObject(logics, store, newHelpers);
    const newHandlers = bindObject(handlers, newLogics);

    return createContainer((props) => {
      store.props = props;

      return {
        ...newHandlers,
        ...f.apply(undefined, [store, newHelpers, newLogics]),
      };
    }, component);
  }
}
