import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import CharacterDetail from './components/characterDetail/characterDetail';
import About from './components/about/creador'
import Data from './data.json';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home personajes = {Data.Characters}></Home>
      <CharacterDetail personajes = {Data.Characters}></CharacterDetail>
      <About></About>
    </div>
  );
}

export default App;
