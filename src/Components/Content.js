import { Switch, Route } from 'react-router-dom';
import { firebaseConfig } from '../config/config';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import { useState } from 'react';

import {Home} from './Home';
import {About} from './About';
import { Register } from './Register';
import {Login} from './Login';
import { Logout } from './Logout';
import {AddData} from './Admin/AddData'

export function Content( props ) {
  const[auth, setAuth] = useState(false );
  const [user, setUser] = useState();

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();

  const addData = ( data ) => {
    return new Promise( (resolve, reject) => {
      db.collection('books').add( data )
      .then( () => resolve(true) )
      .catch ((errros) => reject(erros))
    })
  }


  const registerUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword( email,password )
    .then( ( userCredential ) => {
        //do something with the user object 
        var user = userCredential.user;
        console.log(user.uid);
        setUser(userCredential.user);
        setAuth(true);
        props.authHandler( true );
    })
    .catch((error) =>{
        console.log(error);
    })
  }

  const loginUser = (email,password) => {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential) => {
      setUser(userCredential.user)
      setAuth( true ) 
      props.authHandler(true)
    })
    .catch(( error) => {
      console.log(error);
    })
  }

  const logoutUser = () => {
    firebase.auth().signOut()
    .then( () => {
      console.log("successfull signed out");
      setUser(null ) 
      setAuth(false)
      props.authHandler( false )
    })
  }

  


  return(
    <div className="container">
      {/* <h1>Hello Content</h1> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path = "/register">
          <Register handler = {registerUser}/>
        </Route>
        <Route path = "/login">
          <Login handler = {loginUser}/>
        </Route>
        <Route path = "/Logout">
          <Logout handler = {logoutUser}/>
        </Route>
        <Route path = "/add">
          <AddData handler = {addData}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        
      </Switch>
    </div>
  )
}