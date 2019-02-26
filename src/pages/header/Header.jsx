import React, { Component } from 'react';
import './header.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import  '../../firebase';

class Header extends Component {
    state = { isSignedIn: false }
    constructor(){
        super();

    }
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ isSignedIn: !!user })
          console.log("user", user)
        })
      }

    render() {
        return (

    <header>

        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">Qué es Fortunita</h4>
                <p className="text-muted">Fortunita es una ruleta de la fortuna con muy buenos premios orientados a la tecnología.</p>
              </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Contact</h4>
                  <ul className="list-unstyled">
                    <li><a className="text-white" href="https://twitter.com/cesar_garces" target="_blank">Siguenos en Twitter</a></li>
                    <li><a className="text-white" href="https://www.facebook.com/cesar.garces" target="_blank">Siguenos en Facebook</a></li>
                    <li><Link className="text-white" to="/contact">Contactanos</Link></li>
                    <li><a className="text-white" href="https://discordapp.com/channels/525032854007185419/525032854875275285" target="_blank">Discord</a></li>
                  </ul>
                 
                </div>
              </div>
            </div>
          </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="/" className="navbar-brand d-flex align-items-right">
                    <strong>Fortunita</strong>
                    </a>

                    <div>
          {this.state.isSignedIn ? (
          <span>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h4>{firebase.auth().currentUser.displayName}</h4>
            {firebase.auth().currentUser.photoURL == null
            ?<img
            width="30$"
            alt="profile picture"
            src={'https://firebasestorage.googleapis.com/v0/b/fortunita-94ae5.appspot.com/o/img%2Fno-img-user.png?alt=media&token=296efde9-58f8-43fd-8dc0-0f46157b6a2e'}
          />
            :<img
            width="30$"
            alt="profile picture"
            src={firebase.auth().currentUser.photoURL}
             />

            }
            
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
                   
        )}
                    
      </div>

      {this.state.isSignedIn 
                    ? null
                    
                    :<a href="login/">
                    <img className="" src="https://firebasestorage.googleapis.com/v0/b/fortunita-94ae5.appspot.com/o/img%2Fboton-verde-login.png?alt=media&token=438a979d-8f8e-4908-9edf-ad62120b28bd"
                    onMouseOver={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/fortunita-94ae5.appspot.com/o/img%2Fboton-verde-login2.png?alt=media&token=903e7338-6694-4272-ba73-15f7aa4a2d07")}
                    onMouseOut={e => (e.currentTarget.src = "https://firebasestorage.googleapis.com/v0/b/fortunita-94ae5.appspot.com/o/img%2Fboton-verde-login.png?alt=media&token=438a979d-8f8e-4908-9edf-ad62120b28bd")}
                    width="54%"
                    />
                    </a>
      }

                   
                  
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
    </header>
        )
    }
}
export default Header;
