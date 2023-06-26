import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';


import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
