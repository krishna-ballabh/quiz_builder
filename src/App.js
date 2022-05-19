import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
