import React from 'react';
import Navigation from './navigation.jsx';

const Layout = ({content = () => null }) => (
  <div>
    <header>
    <Navigation />
    </header>

    <div>
    {content()}
    </div>

    <footer>
    <small>This is a footer.</small>
    </footer>
  </div>
);

export default Layout;
