import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainFace from './FaceMultiForm/MainFace';
import Account from './AccountInfo/Account';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Account}/>
      <Route exact path="/face-account" component={MainFace}/>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
