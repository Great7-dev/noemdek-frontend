import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./components/Register/register";
import { Login } from "./components/Login/login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
