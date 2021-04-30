import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Topbar from './components/layout/Topbar';
import Navbar from './components/layout/Navbar';
import Jumbotron from './components/layout/Jumbotron';
import InfoPictures from './components/layout/infoPictures';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Fragment>
        <Topbar/>
        <Navbar/>
        <Jumbotron/>
        <InfoPictures/>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
