import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import MenuPage from './components/MenuPage';
import ViewJokePage from './components/ViewJokePage';
import AddJoke from './components/AddJoke';
import JokeComponent from './components/JokeComponent';
import CommentComponent from './components/CommentComponent';
import MostLikedJokes from './components/MostLikedJokes';
import LeastLikedJokes from './components/LeastLikedJokes';
import ViewComments from './components/ViewComments';





function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/menu" element={<MenuPage/>} />
        <Route path="/view-all" element={<ViewJokePage/>} />
        <Route path="/add-joke" element={<AddJoke/>} /> 
        <Route path="/jokes" element={<JokeComponent/>} /> 
        <Route path="/comment/:id" element={<CommentComponent/>} /> 
        <Route path="/jokes/most" element={<MostLikedJokes/>} /> 
        <Route path="/jokes/least" element={<LeastLikedJokes/>} />
        <Route path="/view-comment/:id" element={<ViewComments/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
