// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
// import Search from "./components/Search";
import toggleSort from "./utils/Sort"
import API from "./utils/API";
import React, { Component, useEffect, useState} from "react";

// class App extends Component {
function App() {
  const [data, setData] = useState([]);
  const [reverse, setReverse] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  // state = {
  //   data: [],
  //   reverse: false,
  //   error: ""
  // }

  // componentDidMount() {
  useEffect(() => {
    API.getUsers()
    .then(res => 
      {
        setData(res.data.results);
      })
    .catch(err => 
      {
        setError(err.message)
      })
  }, []);

  

  // render(){
    return (
      <div>
        <Header />
        
        <EmployeeList data={data} />

      </div>
    );
  // }
}
export default App;
