import React, { Component } from 'react';
import './content.css';
//import { DB_CONFIG } from '../../config';
import firebase from 'firebase';
import 'firebase/database';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
//import BoxesForm from '../../boxes/boxesForm/BoxesForm';

import  '../../firebase';

var NumberFormat = require('react-number-format');


class Content extends Component {
    constructor(){
      super();
      this.state = {
        boxes: [
          //{boxId: 1, name: 'Caja Android', price:35000, discount:0, image1: '../img/Android1.png', image2: '../img/Android2.png'},
          //{boxId: 2, name: 'Caja Apple', price:150000, discount:0, image1: '../img/Apple1.png', image2: '../img/Apple2.png'},
          //{boxId: 3, name: 'Caja Barata', price:5000, discount:2000, image1: '../img/Cheap1.png', image2: '../img/Cheap2.png'},
          //{boxId: 4, name: 'Caja Android', price:35000, discount:0, image1: '../img/Android1.png', image2: '../img/Android2.png'},
          ]
      };
  
      //this.addBox = this.addBox.bind(this);
  
      //this.Content = firebase.initializeApp(DB_CONFIG);
      this.db = firebase.database().ref().child('boxes');
  
  }
  addBox(box){
    //let { boxes } = this.state;
    //boxes.push({
     // boxId: boxes.length + 1,
     // name: box,
     // price: box,
      //discount: box,
      //image1: box,
     // image2: box
   // });

    //this.setState({ boxes });



    //crear caja base de datos--------------
    this.db.push().set({
      index: '0',
      price: '0',
      image: 'https://firebasestorage.googleapis.com/v0/b/fortunita-94ae5.appspot.com/o/img%2Fcaja.png?alt=media&token=6e86646a-4e3a-4b32-b56d-69f340df093b',
      boxId: '-LW72ZrUaHcVaEiao2c1',
      chance: '0'
    });
    //-----------------------

    //console.log(boxes);

}

  componentDidMount(){
    const { boxes } = this.state;
    this.db.on('child_added', snapshot => {
      boxes.push({
        boxId: snapshot.key,
        name: snapshot.val().name,
        price: snapshot.val().price,
        discount: snapshot.val().discount,
        image1: snapshot.val().image1,
        image2: snapshot.val().image2
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
               
                <div key={box.boxId} className="col-md-4">
                <div  className="card mb-4 shadow-sm">
                <img src={box.image1}
                onMouseOver={e => (e.currentTarget.src = box.image2)}
                onMouseOut={e => (e.currentTarget.src = box.image1)}
                />
        
                <div className="card-body2">
                <h5 className="card-title2">{box.name}</h5>
        
                { box.discount > 0
                  ? <NumberFormat className="card-text2 pdiscount" value={box.price} displayType={'text'} thousandSeparator="." decimalSeparator={','} prefix={'$'} />
                  : null
                }
        
                { box.discount == 0
                  ? <NumberFormat className="card-text2 normal" value={box.price} displayType={'text'} thousandSeparator="." decimalSeparator={','} prefix={'$'} />
                  : <NumberFormat className="card-text2 discount" value={box.price-box.discount} displayType={'text'} thousandSeparator="." decimalSeparator={','} prefix={'$'} />
                }
              
                <div className="center-block">
                <a href={box.name}>
                <img className="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/fortunita-94ae5.appspot.com/o/img%2Fboton-verde1.png?alt=media&token=07c7fc63-aa81-452d-b864-e338f29592a2"
                onMouseOver={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/fortunita-94ae5.appspot.com/o/img%2Fboton-verde2.png?alt=media&token=fb417885-0f38-4071-97f2-b67614f80d7c")}
                onMouseOut={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/fortunita-94ae5.appspot.com/o/img%2Fboton-verde1.png?alt=media&token=07c7fc63-aa81-452d-b864-e338f29592a2")}
                />
                </a>
                </div>
        
                </div>
                </div>
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
