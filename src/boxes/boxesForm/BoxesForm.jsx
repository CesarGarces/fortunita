import React, { Component } from 'react';
import './boxesForm.css';

class BoxesForm extends Component {
    constructor(){
        super();
        this.addBox = this.addBox.bind(this);
    }
    
    addBox(){
    //this.props.addBox(this.txtIndex.value);
    }
    render() {
        return (
        <div className="form-group">

            <input 
             ref={input => {this.txtIndex = input;}}
             placeholder="index"
             type="text"/>

<input 
             ref={input => {this.price = input;}}
             placeholder="price"
             type="text"/>

<input 
             ref={input => {this.imagen = input;}}
             placeholder="imagen"
             type="text"/>

<input 
             ref={input => {this.boxId = input;}}
             placeholder="boxId"
             type="text"/>

<input 
             ref={input => {this.chance = input;}}
             placeholder="chance"
             type="text"/>




            <button onClick={this.addBox()} className="btn btn-info">Agregar Caja</button>

        </div>
        )
    }
}
export default BoxesForm;