import { Switch, Route } from 'react-router-dom';
import { firebaseConfig } from '../config/config';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

import {Home} from './Home';
import {About} from './About';

export function Content( props ) {

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
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
      </Switch>
    </div>
  )
}