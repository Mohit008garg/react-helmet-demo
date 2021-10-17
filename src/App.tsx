import React from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import './App.css';
import ChildOne from './ChildOne';
import ChildThree from './ChildThree';
import ChildTwo from './ChildTwo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <title>My Home page</title>
          <meta name="description" content="this is my home page"/>
          <meta name="keywords" content="react, react-demo, react-helmet-demo, ieelovecodingwise"/>
        </Helmet>
        Links to Pages are:
        <br />
        <Link to="childOne">Child One</Link>
        <br />
        <Link to="childTwo">Child Two</Link>
        <br />
        <Link to="childThree">Child Three</Link>
        <br />
        <Switch>
          <Route path="/childOne" component={ChildOne} />
          <Route path="/childTwo" component={ChildTwo} />
          <Route path="/childThree" component={ChildThree} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
