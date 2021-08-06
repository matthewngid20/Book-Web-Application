import logo from './logo.svg';
import './App.css';
import {Header} from './Components/Header';
import {Content} from './Components/Content';
import {Footer} from './Components/Footer';

import {useState} from 'react';

const Nav = [
  {name: "Home", link: "/"},
  {name: "Register", link: "/register"},
  {name: "Login", link: "/login"},
  {name: "Add", link: "/add"},
  {name: "About", link: "/about"}
]
const AuthNav = [
  {name: "Home", link: "/"},
  {name: "About", link: "/about"},
  //{name: "Register", link: "/register"},
  {name: "Log out ", link: "/logout"},
  
]

function App() {
  const [ auth, setAuth ] = useState( false );

  return (
    <div className="App">
      <Header name="Books" navigation={ (auth) ? AuthNav : Nav } />
      <Content authHandler = {setAuth}/>
      <Footer />
    </div>
  );
}

export default App;
