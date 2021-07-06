import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner } from 'react-bootstrap';
import Home from './pages/Home.js'
import Header from './components/Header.js'
import AboutUs from './pages/AboutUs.js'
import Props from './pages/Props'
import Contact from './pages/Contact.js'
import Salaries from './pages/Salaries.js'
import Footer from './components/Footer.js'
import NotFound from './pages/NotFound';
import BannerStatistics from './components/BannerStatistics.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useLocalContext } from './components/Context';

function App() {
  const { selectUser, listUserServices, addUserService, removeUserService, listServices, listProviders, getUserData, listUsers, doneLoading
  } = useLocalContext();

  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
  }, []);

  return (

    <div>

      {loaded ?
        (<Router>
          <div className="App">
            <Header />
            <Container className="body">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/aboutUs" component={AboutUs} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/salaries" component={Salaries} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/props/:prop_id">
                  <BannerStatistics />
                  <Props />
                </Route>
                <Route component={NotFound} />
              </Switch>
            </Container>
            <Footer />
          </div>
        </Router>
        )
        :
        (<Spinner animation="border" variant="warning" />)}

    </div>
  )
}

export default App;

