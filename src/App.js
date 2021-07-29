import logo from './logo.svg';
import './App.css';
import {Header} from './Components/Header';
import {Content} from './Components/Content';
import {Footer} from './Components/Footer';

import {useState} from 'react';

const Nav = [
  {name: "Home", link: "/"},
  {name: "About", link: "/about"},
  {name: "Register", link: "/register"},
]

function App() {
  return (
    <div className="App">
      <Header name="Books" navigation={Nav} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
