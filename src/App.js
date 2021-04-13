import React, { Component } from 'react';
// import achieve_logo from './img/achieve_logo_02.png';
// import mm_bulb from './img/mm_bulb_00.png';
// import maker_madness from './img/maker_madness_00.png';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
// import TakeNMake from './components/TakeNMake';
import Make from './components/Make';
import Code from './components/Code';
import Give from './components/Give';
// import CodeJoy from './components/CodeJoy';
// import Home2 from './components/Home2';
// import About from './components/About';
// import Contact from './components/Contact';
import Header from './components/Header';
import TakeMake01 from './components/TakeMake01';
import TakeMake02 from './components/TakeMake02';
import TakeMake03 from './components/TakeMake03';
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
