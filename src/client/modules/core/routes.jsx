import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from './components/main_layout.jsx';
import Core from './containers/core';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'core',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Core />)
      });
    }
  });
}
