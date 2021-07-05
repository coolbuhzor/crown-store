import HomePage from './pages/homepage/HomePage';
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Shop from './pages/shop/shop';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={Shop}/>
    </div>
  );
}

export default App;
