import logo from './logo.svg';
import './App.css';
import SignIn from './routes/SignIn/SignIn';
import SignUp from './routes/SignUp/SignUp';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <SignUp />
    </div>
  );
}

export default App;
