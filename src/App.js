import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import SignIn from './components/pages/SignIn';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact > <Home  /> </Route>
        <Route path='/aboutus' exact > <AboutUs  /> </Route>
        <Route path='/contactus' exact > <ContactUs  /> </Route>
        <Route path='/signin' exact > <SignIn  /> </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
