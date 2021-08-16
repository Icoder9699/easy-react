import { Route, Switch } from 'react-router-dom';
import './App.css';
import Accardion from './components/Accardion/Accardion';

import Header from './components/Header/Header';
import Menu from './components/Meals/Menu/Menu';
import Tabs from './components/Tabs/Tabs';

function App() {
  return (
    <div>
      <Header />
      <Switch>
       <div className="container">
        <Route path="/accardion" component={Accardion} />
        <Route path="/menu" component={Menu} />
        <Route path="/tabs" component={Tabs} />
       </div>
      </Switch>
    </div>
  );
}

export default App;
