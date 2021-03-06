import './App.css';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component= {Home} />
        <Route exact path="/contact" component= {Contact} />
        <Route exact path="/about" component= {About} />
        <Route exact path="/login" component= {Login} />
      </Switch>
      <Footer/>
    </div>
    
  
  );
}

export default App;
