import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import CreateNewDiary from "./components/CreateNewDiary";
import Post from "./components/Post";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
     <Router>
       <Post />
       <Routes>
       <Route path='/'/>
       </Routes>
     </Router>
      
    </>
  );
}

export default App;
