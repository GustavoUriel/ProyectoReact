import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home.js'
import Header from './components/Header.js'
import AboutUs from './components/AboutUs.js'
import Footer from './components/Footer.js'

function App() {

  return(
<>    
<Header />
<BrowserRouter>
  <Route exact path="/" render={() => <Home />} />
  <Route exact path="/au" render={() => <AboutUs />} />
</BrowserRouter>
<Footer />
</>
  )
}

export default App;
