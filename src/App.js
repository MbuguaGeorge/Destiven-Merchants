import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Service from './components/services';
import Success from './components/emails/success';
import Unsubscribe from './components/emails/unsubscribe';
import './App.css'
import ReactGA from 'react-ga';

ReactGA.initialize('G-MG2SS0ELM2');

function App(){
  return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/services" element={<Service/>} />
          <Route exact path='/unsubscribe' element={<Unsubscribe />} />
          <Route exact path='/unsubscribe/success' element={<Success />} />
        </Routes>
      </Router>
  )
}

export default App;