import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import CharacterDetail from './components/characterDetail/characterDetail';
import About from './components/about/creador'
import Data from './data.json';
import { useEffect } from "react";
import {Switch, Route} from "react-router-dom";

function App() {

  useEffect( () => {
    console.log("App Anime")
  },[])

  return (
    <div>
      <Navbar></Navbar>

      <Switch>

        <Route exact path="/">
          <Home personajes = {Data.Characters}></Home>
        </Route>

        <Route exact path="/charDetail">
          <CharacterDetail personajes = {Data.Characters}></CharacterDetail>
        </Route>

        <Route exact path="/about">
          <About></About>
        </Route>

        <Route>
          <h1> PAG NOT FOUND </h1>
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
