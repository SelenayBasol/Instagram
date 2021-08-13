import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Myprofile from './components/Myprofile';
import Explore from './components/Explore';
import Message from './components/Message';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"


function App() {
  return (
    <div className="app">
    <Router>
      <Header/>
      <Route>
        <Switch>
        <Home path="/" exact />
        <Myprofile path="/profile"/>
        <Explore path="/explore"/>
        <Message path="/message"/>
      </Switch>
      </Route>
     </Router>
    </div>
  );
}

export default App;
