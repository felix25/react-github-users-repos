import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pages from './components/page/home'
import Profile from './components/page/Profile'
import Header from './components/ui/Header'
const App =()=> {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Pages} />
        <Route path="/user/:username" component={Profile}/>
      </Switch>
    </>
  )
  
}
export default App;