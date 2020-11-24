// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
// import Search from "./components/Search";
import API from "./utils/API";
import React, { Component, useEffect, useState} from "react";

// class App extends Component {
function App() {
  const [data, setData] = useState([]);
  const [reverse, setReverse] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");


  // function toggleSort(reverse, setReverse) {
  //   if (reverse) {
  //       setReverse(false);
  //   } else {
  //       setReverse(true);
  //   }
  // }

  

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
        
        <EmployeeList data={data} reverse={reverse} setReverse={setReverse} />

      </div>
    );
  // }
}
export default App;
