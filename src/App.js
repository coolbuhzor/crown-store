import React from 'react';
// import React, { useState, useEffect } from 'react';
import HomePage from './pages/homepage/HomePage';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/Header';
import SigninSignup from './pages/sigin-signup/SigninSignup';
import { auth } from './firebase/FIrebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }
  // const [currentUser, setCurrentUser] = useState(null);
  // const [unsubscribeFromAuth, setUnsubscribeFromAuth] = useState(null)

  // let unsubscribe = null;

  // useEffect(() => {
  // const  setUnsubscribeFromAuth=  auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //     console.log(user);
  //   });
  //   setUnsubscribeFromAuth()
  // }, []);

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch className='app'>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' component={SigninSignup} />
        </Switch>
      </>
    );
  }
}

export default App;
