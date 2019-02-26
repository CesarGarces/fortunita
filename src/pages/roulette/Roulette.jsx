import React, { Component } from 'react';
import './roulette.css';

import Header from '../header/Header';
import Jumbotron from '../jumbotron/Jumbotron';
import Footer from '../footer/Footer';

class Roulette extends Component {
    constructor(props){
        super();
        this.state = props.match.params.boxId;
   
    }

    render() {
        return (

           <div>
               <Header />
               <Jumbotron />
                    <p>{this.state}</p>
                    
                <Footer />

           </div>
        )
    }
}
export default Roulette;