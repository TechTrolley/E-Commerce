import Login from "./login.jsx";
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <>
      <Login/>
      <Navbar/>
    </>
  )
}

export default App
