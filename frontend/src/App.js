import {
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";
import Login from "./components/Login";
import Registrer from './components/Registrer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/messenger/login" element={<Login/>} />
        <Route path="/messenger/register" element={<Registrer/>} />
      </Routes>
      </BrowserRouter>
    </div>
      
  
  );
}

export default App;
