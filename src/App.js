import { Route, Switch } from 'react-router-dom';

import './App.css';
import Accardion from './components/Accardion/Accardion';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Menu from './components/Meals/Menu/Menu';
import Quiz from './components/QuizApp/Quiz';
import Tabs from './components/Tabs/Tabs';

function App() {
  return (
    <div>
      <Header />
       <div className="container">
        <Switch>
          <Route path="/accardion" component={Accardion} />
          <Route path="/menu" component={Menu} />
          <Route path="/tabs" component={Tabs} />
          <Route path="/quiz-app" component={Quiz} />
          <Route path="/form" component={Form} />
        </Switch>
       </div>
    </div>
  );
}

export default App;
