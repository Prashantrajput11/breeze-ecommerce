// Info : Contains components

// Imports
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import{BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import {Products} from "./pages/Products/Products"

// Function App
function App() {

  // Return 
  return (
    <div className="App">
      <Navbar/>

      <Router>
      <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/products" element = {<Products/>}/>
      </Routes>
      </Router>

    
      
     
    </div>
  );
}

export default App;
