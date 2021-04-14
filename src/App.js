import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Make from './pages/Make';
import Code from './pages/Code';
import Give from './pages/Give';
import TakeMake01 from './pages/TakeMake01';
import TakeMake02 from './pages/TakeMake02';
import TakeMake03 from './pages/TakeMake03';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/make" component={Make} exact />
          <Route path="/code" component={Code} exact />
          <Route path="/give" component={Give} exact />
          <Route path="/takemake01" component={TakeMake01} exact />
          <Route path="/takemake02" component={TakeMake02} exact />
          <Route path="/takemake03" component={TakeMake03} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
