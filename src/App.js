import logo from './logo.svg';
import './App.css';
import SignUp from './routes/SignUp/SignUp';
import FormationCard from './components/FormationCard/FormationCard';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home/Home';


function App() {
  return (
    <div className="App">
    {/* <FormationCard /> */}
    <Home />
    </div>
  );
}

export default App;
