import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Writing from './components/Writing';
import ChatBot from './components/ChatBot';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/writing" element={<Writing/>}/>
          <Route path="/ChatBot" element={<ChatBot/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
