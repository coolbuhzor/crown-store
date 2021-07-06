import HomePage from './pages/homepage/HomePage';
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Shop from './pages/shop/shop';
import Header from './components/header/Header';
import SigninSignup from './pages/sigin-signup/SigninSignup';

function App() {
  return (
    <>
    <Header/>
    <Switch className='app'>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop}/>
      <Route exact path='/signin' component={SigninSignup}/>
    </Switch>
    </>
  );
}

export default App;
