import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Programs from './components/pages/Programs';
import HowItWorks from './components/pages/HowItWorks';
import ClientResults from './components/pages/ClientResults';
import 'react-image-lightbox/style.css'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact > <Home  /> </Route>
        <Route path='/aboutus' exact > <AboutUs  /> </Route>
        <Route path='/programs' exact > <Programs  /> </Route>
        <Route path='/howitworks' exact > <HowItWorks  /> </Route>
        <Route path='/clientresults' exact > <ClientResults  /> </Route>
        <Route path='/contactus' exact > <ContactUs  /> </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
