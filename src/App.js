import React from "react";
<<<<<<< HEAD
import DisplayAllPosts from './components/DisplayAllPosts'
const App = ( ) => {
  return (
=======
<<<<<<< HEAD
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
=======
import DisplayAllPosts from './components/DisplayAllPosts'
const App = ( ) => {
  return (
>>>>>>> main
    <div>
      <DisplayAllPosts />
    </div>
>>>>>>> dev
  );
};
export default App;
