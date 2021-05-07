import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import SalesPoint from './components/salesPoint';
import Tickets from './components/tickets';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sales-point'>
            <SalesPoint />
          </Route>
          <Route path='/tickets'>
            <Tickets />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
