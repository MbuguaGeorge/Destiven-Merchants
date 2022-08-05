import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Blog from './components/blog';
import Service from './components/services';
import './App.css'
import ReactGA from 'react-ga';

ReactGA.initialize('G-MG2SS0ELM2');
ReactGA.pageview(window.location.pathname + window.location.search);

function App(){
  return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/services" element={<Service/>} />
        </Routes>
      </Router>
  )
}

export default App;