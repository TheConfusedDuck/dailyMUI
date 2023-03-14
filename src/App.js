import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Signup from "./Day1/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/day1" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
