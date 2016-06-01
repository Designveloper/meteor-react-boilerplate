import React from 'react';
import { FlowRouter as FR } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import { Layout } from '../../ui/layouts/Layout.jsx';

import TestContainer from '../../ui/pages/TestContainer/TestContainer.js';

FR.route('/:id', {
  name: 'Home',
  action(params) {
    mount(Layout, {
      content: <TestContainer {...params} />,
    });
  },
});
