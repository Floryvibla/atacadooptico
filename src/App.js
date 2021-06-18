import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'

import './App.css'

import Error404 from './pages/NotFound/'
import Home from './pages/Home/'
import Detail from './pages/Detail/'


function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/detail" component={Detail}/>
        <Route path="*" component={Error404}/>
      </Switch>
    </main>
  );
}

export default App;
