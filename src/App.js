import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home/Home';
import FormationCard from './components/Album/Album';
import SignUp from './routes/SignUp/SignUp';
import SignIn from './routes/SignIn/SignIn';
import Album from './components/Album/Album';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Catalogue" element={<Album />} />

    {/* <Home /> */}
    </Routes>
    // <Album />
  );
}

export default App;
