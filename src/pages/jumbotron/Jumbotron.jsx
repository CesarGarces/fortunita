import React, { Component } from 'react';
import './jumbotron.css';

class Jumbotron extends Component {
    constructor(){
        super();

    }

    render() {
        return (

            <section className="jumbotron text-center">
		        <div className="container">
		            <div className="jumbotron-heading">
                        <div className="col-md-12">
		                    <small>Que esta pasando:</small>
                            <img src="../img/Squishy -cjn62wqox030901s6uohot645.png" width="10%"/>
                            <img src="../img/Spinner@-cjn62vw9p030301s6f1b0o8v4.png" width="10%"/>
                            <img src="../img/Yo-Yo@2x-cjn62xjtu030g01s6qt0sgtvs.png" width="10%"/>
                            <img src="../img/Beaded C-cj8ybpg5k00i40ounvrgoi90o.png" width="10%"/>
                            <img src="../img/Spinner@-cjn62vw9p030301s6f1b0o8v4.png" width="10%"/>
                            <img src="../img/Squishy -cjn62wqox030901s6uohot645.png" width="10%"/>
                            
                        </div>
		            </div>
		        </div>
		    </section>
        )
    }
}
export default Jumbotron;
