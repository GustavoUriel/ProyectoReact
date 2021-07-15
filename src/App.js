import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner } from 'react-bootstrap';
import Home from './pages/Home.js'
import Header from './components/Header.js'
import AboutUs from './pages/AboutUs.js'
import Services from './pages/Services'
import Contact from './pages/Contact.js'
import Salaries from './pages/Salaries.js'
import AboutYou from './pages/AboutYou.js'
import Footer from './components/Footer.js'
import NotFound from './pages/NotFound';
import BannerStatistics from './components/BannerStatistics.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useServerSide } from './components/ServerSide';

function App() {
  const { selectUser, listUserServices, addUserService, removeUserService, listServices, listProviders, listUserInfo, listUsers, stillLoading
  } = useServerSide();

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
                <Route exact path="/aboutYou" component={AboutYou} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/salaries" component={Salaries} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/services/:service_id">
                  <BannerStatistics />
                  <Services />
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

