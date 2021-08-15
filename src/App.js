import { Route } from 'react-router-dom';
import './App.css';
import Accardion from './components/Accardion/Accardion';

import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/accardion" component={Accardion} />
     
    </div>
  );
}

export default App;
