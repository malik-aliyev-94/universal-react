import React from 'react';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import { Route, Switch } from 'react-router-dom';

import AppStore from './stores/AppStore';
import { Layout } from './Layout';

// Import all page components
import { IndexPage } from './IndexPage';
import { InfoPage } from './InfoPage';
import { ContactPage } from './ContactPage';
import { AboutPage } from './AboutPage';
import { ItemsPage } from './ItemsPage';
import { ItemPage } from './ItemPage';
import { NotFoundPage } from './NotFoundPage';

// useStrict(true);

const renderIndex = () => <IndexPage />;
const renderItem = ({ match, staticContext }) => {
  const id = match.params.id;
  return <ItemPage id={id} />;
};

const stores = { AppStore };

export const App = () => (
  <Provider {...stores}>
    <Layout>
      <Switch>
        <Route exact path="/" render={renderIndex} />
        <Route exact path="/items" component={ItemsPage} />
        <Route exact path="/item/:id" render={renderItem} />
        <Route exact path="/info" component={InfoPage} />
        <Route exact path="/contact" render={ContactPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  </Provider>
);

export default App;
