import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import MenuPage from './components/MenuPage';
import ViewJokePage from './components/ViewJokePage';
import AddJoke from './components/AddJoke';
import JokeComponent from './components/JokeComponent';


function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/menu" element={<MenuPage/>} />
        <Route path="/view-all" element={<ViewJokePage/>} />
        <Route path="/add-joke" element={<AddJoke/>} /> 
        <Route path="/jokes" element={<JokeComponent/>} /> 
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
