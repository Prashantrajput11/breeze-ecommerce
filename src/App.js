// Info : Contains components

// Imports
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

// Function App
function App() {

  // Return 
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
