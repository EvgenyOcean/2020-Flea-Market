import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Item from './pages/Item';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={AboutMe}/>
        <Route exact path="/item/:name" component={Item}/>
        <Route exact path="/cart" component={Cart}/>
        <Route component={ErrorPage}/>
      </Switch>
    </>
  );
}

export default App;
