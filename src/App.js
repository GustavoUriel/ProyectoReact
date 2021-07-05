import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Home from './pages/Home.js'
import Header from './components/Header.js'
import AboutUs from './pages/AboutUs.js'
import Props from './pages/Props'
import Contact from './pages/Contact.js'
import Salaries from './pages/Salaries.js'
import { Context } from './components/Context.js'
import Footer from './components/Footer.js'
import NotFound from './pages/NotFound';
import BannerStatistics from './components/BannerStatistics.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getFirestore } from './firebase/firebase.js'
import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const db =  getFirestore()
    const itemCollection = db.collection("reactProyect")
    itemCollection.get().then(
      (querySnapshot)=>{
        if(querySnapshot.size === 0){
          console.log('no hay resultados')
        }
        setItems(querySnapshot.docs.map(doc => doc.data()))
      }
    ).catch((error)=>{console.log('Error searching items', error)}).finally(()=>{setLoading(false)})
  }, []);


  return(
    <Router>
    <Context>
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
    </Context>
  </Router>  )
}

export default App;

