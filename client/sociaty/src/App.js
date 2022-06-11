import Navigation from "./components/nav";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
                    
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
                       
                   
              <Route path="/chat" element={<Chat />} />
            </Routes>
      </BrowserRouter>
  );
}

export default App;
