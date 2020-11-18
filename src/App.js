import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Employees from "./components/Employees";

function App() {
  return (
    <div>
      <Header />
      <Employees />

    </div>
  );
}

export default App;
