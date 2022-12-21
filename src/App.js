import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home/Home';
import FormationCard from './components/FormationCard/FormationCard';
import SignUp from './routes/SignUp/SignUp';
import SignIn from './routes/SignIn/SignIn';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />

    {/* <Home /> */}
    </Routes>
    // <FormationCard />
  );
}

export default App;
