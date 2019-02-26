import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';
import '../index.css';

import Login from '../pages/login/Login'

import Jumbotron from '../pages/jumbotron/Jumbotron';
import Header from '../pages/header/Header';
import Content from '../pages/content/Content';
import Footer from '../pages/footer/Footer';

import Contact from '../pages/contact/Contact';
import Roulette from '../pages/roulette/Roulette';
import HowGame from '../pages/helps/HowGame';

import Android from '../pages/roulette/Android';
import Apple from '../pages/roulette/Apple';

import BoxAndroid from '../pages/categories/BoxAndroid'

import App from '../App';

//import LoadingOverlay from 'react-loading-overlay'
//import BounceLoader from 'react-spinners/BounceLoader'

//import { Loader } from 'react-overlay-loader';

function Routerpath() {
  return (
    
    <Router>
      
      <div>
      

        <Route exact path="/" component={Home} />
        <Route path="/contact/" component={Contact} />
        
        <Route path="/roulette/:boxId" component={Roulette} />

        <Route path="/Caja Android/" component={Android} />
        <Route path="/Caja Apple/" component={Apple} />

        <Route path="/boxandroid/" component={BoxAndroid} />
        <Route path="/login/" component={Login} />
      

      </div>
      
    </Router>

  );
}

function Home() {
  return (
    
    <div>

        <Header />

        <Jumbotron />
        
        <Content />

        <HowGame />

        <Footer />

    </div>

  );
}



function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default Routerpath;