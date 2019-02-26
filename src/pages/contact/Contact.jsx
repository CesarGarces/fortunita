import React, { Component } from 'react';
import './contact.css';
import Jumbotron from '../jumbotron/Jumbotron';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class Contact extends Component {
    constructor(){
        super();

    }

    render() {
        return (
            <div>
            <Header />

            <Jumbotron />

            <div className="form-group">

            <input 
             ref={input => {this.txtName = input;}}
             placeholder="nombre"
             type="text"/>

<input 
             ref={input => {this.txtPrice = input;}}
             placeholder="Precio"
             type="text"/>

<input 
             ref={input => {this.txtDiscount = input;}}
             placeholder="Descuento"
             type="text"/>

<input 
             ref={input => {this.txtImg1 = input;}}
             placeholder="Imagen principal"
             type="text"/>

<input 
             ref={input => {this.txtImg2 = input;}}
             placeholder="Imagen secundaria"
             type="text"/>




            <button onClick={this.addBox} className="btn btn-info">Agregar Caja</button>

        </div>
        <Footer />
        </div>
        )
    }
}
export default Contact;