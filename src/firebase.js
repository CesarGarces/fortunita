import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA7htrbuN_iMw3EZpn7syoE6FTKqFF1ad4",
    authDomain: "fortunita-94ae5.firebaseapp.com",
    databaseURL: "https://fortunita-94ae5.firebaseio.com",
    projectId: "fortunita-94ae5",
    storageBucket: "fortunita-94ae5.appspot.com",
    messagingSenderId: "432261293116"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();