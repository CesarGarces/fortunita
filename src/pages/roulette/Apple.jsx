import React, { Component } from 'react';
import '../../Card.css';
import Card from '../../Card';
import data from '../../data/apple';
import Jumbotron from '../jumbotron/Jumbotron';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import BoxApple from '../categories/BoxApple'


// class component
class Apple extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      products: data.products,
      property: data.products[0],

      boxName: props.match.params.boxName
     
    }
  }
  
  nextProperty = () => {
    let max = this.state.products.length;
    let random = Math.floor(Math.random() * max) + 1 ;
    const newIndex = this.state.property.index + random;
    this.setState({
      property: data.products[newIndex]
    })
  }

  
  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.products[newIndex]
    })
  }

  render() {
    const {products, property} = this.state;
    return (
      <div className="App">

       
      <Header />
      <Jumbotron />
        <div className="page">
            <section>
                
                <h1>Caja Apple. Abre la caja y gana. Buena Suerte</h1>
                
                <input type="image" src="https://firebasestorage.googleapis.com/v0/b/fortunita-94ae5.appspot.com/o/img%2Fboton-verde1.png?alt=media&amp;token=07c7fc63-aa81-452d-b864-e338f29592a2"
                    onClick={() => this.nextProperty()} 
                    disabled={property.index != 0}
                    onMouseOver={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/fortunita-94ae5.appspot.com/o/img%2Fboton-verde2.png?alt=media&token=fb417885-0f38-4071-97f2-b67614f80d7c")}
                    onMouseOut={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/fortunita-94ae5.appspot.com/o/img%2Fboton-verde1.png?alt=media&token=07c7fc63-aa81-452d-b864-e338f29592a2")}
                />
            </section>
            
            
                      <div className="col">
                        <div className={`cards-slider active-slide-${property}`}>
                          <div className="cards-slider-wrapper" 
                          style={{
                            'transform': `translateX(-${property.index*(100/products.length)}%)`
                             }}
                           >
                             
                            {products.map(property => <Card key={property._id} property={property} />)}
  
                          </div>
                        </div>
                       </div>

                       <BoxApple />
                      
           
        </div>
        <Footer />
      </div>
       
    );
  }
}

export default Apple;
