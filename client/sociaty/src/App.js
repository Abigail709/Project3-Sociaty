import Navigation from "./components/nav";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/homepage";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Chat from "./pages/chatpage";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
    </BrowserRouter>
  );
}



export default App;
