import { Switch, Route } from 'react-router-dom';
import { firebaseConfig } from '../config/config';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

import {Home} from './Home';
import {About} from './About';
import { Register } from './Register';

export function Content( props ) {

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  const registerUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword( email,password )
    .then( ( userCredential ) => {
        //do something with the user object 
        var user = userCredential.user;
        console.log(user.uid);
    })
    .catch((error) =>{
        console.log(error);
    })
  }


  return(
    <div className="container">
      <h1>Hello Content</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path = "/register">
          <Register handler = {registerUser}/>
        </Route>
      </Switch>
    </div>
  )
}