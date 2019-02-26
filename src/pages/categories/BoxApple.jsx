import React, { Component } from 'react';
import '../content/content.css';
import './categories.css'
//import { DB_CONFIG } from '../../config';
import firebase from 'firebase';
import 'firebase/database';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import '../../Card.css'

import  '../../firebase';

var NumberFormat = require('react-number-format');


class Content extends Component {
    constructor(){
      super();
      this.state = {
        boxes: []
      };
  
     
  

      
      //this.Content = firebase.initializeApp(DB_CONFIG);
      this.db = firebase.database().ref().child('produsctsApple');
  
  }
  

  componentDidMount(){
    const { boxes } = this.state;
    this.db.on('child_added', snapshot => {
      boxes.push({
        //_Id: snapshot.val()._Id,
        boxId: snapshot.val().boxId,
        index: snapshot.val().index,
        price: snapshot.val().price,
        picture: snapshot.val().picture,
        chance: snapshot.val().chance,
        description: snapshot.val().description,
        name: snapshot.val().name
      })
      this.setState({boxes});
    });
  
  }

    render() {
        return (
         
        <div className="main">
            <div className="album py-5 bg-light">
            <div className="container">
        
            <div className="row">
        
        
        
            {
              this.state.boxes.map(box => {
                return(
              <div key={box.index}> 
              {box.index != 0

              ?<div  className="productWrp__CMfRHq mainContainer">
              <div className="productWrp__2rrUas ">
                <a className="product__2Bi9HX Epic__2fxtOX" href={"/products/"+box.name}>
                  <div className="picture__1nXC9q ">
                      <div className="pictureWrp__qb-r2r pictureFrontSide__1XVTU_">                    
                          <img src={box.picture} alt="Samsung Galaxy S9"/>
                        </div>       
                  </div></a>
                  <div className="title__2FLOGM">{box.name}</div>
                  <NumberFormat className="card-text2 normal" value={box.price} displayType={'text'} thousandSeparator="." decimalSeparator={','} prefix={'$'} />
                </div>
            </div>
              :null

              }
                

              </div>
 
                
                )
        
              })
            }
        
        
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Content;
