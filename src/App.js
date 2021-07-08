import React from 'react';
import { Homepage } from './pages';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
