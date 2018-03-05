import React from 'react';
import { Navigation } from './Navigation';

export const Layout = props => (
  <div className="wrapper">
    <Navigation />
    <div className="content">{props.children}</div>
  </div>
);

export default Layout;
