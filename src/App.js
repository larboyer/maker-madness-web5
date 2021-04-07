// import logo from './logo.svg';
import React, { Component } from 'react';
import achieve_logo from './img/achieve_logo_02.png';
import mm_bulb from './img/mm_bulb_00.png';
import maker_madness from './img/maker_madness_00.png';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import TakeNMake from './components/TakeNMake';
import CodeJoy from './components/CodeJoy';
import Home2 from './components/Home2';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
			<img src={maker_madness} className="achieve-logo" alt="logo" />
			<Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/takenmake" component={TakeNMake} exact/>
             <Route path="/codejoy" component={CodeJoy} exact/>
             <Route path="/home2" component={Home2} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
           </Switch>
			<header className="App-header">
				<img src={achieve_logo} className="achieve-logo" alt="logo" />
				<img src={mm_bulb} className="achieve-logo" alt="logo" />
			</header>
          <Navigation />

        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
