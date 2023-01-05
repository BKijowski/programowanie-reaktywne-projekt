import "./index.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Details from "./components/Details";

function App() {
  return (
  <div className="App">
      <Router>
          <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/signin" element={<Signin/>}></Route>
              <Route exact path="/signup" element={<Signup/>}></Route>
              <Route exact path="/details" element={<Details/>}></Route>
          </Routes>
      </Router>

    </div>

  );
}

export default App