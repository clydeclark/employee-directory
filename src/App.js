import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import API from "./utils/API";
import React, { Component } from "react";

class App extends Component {

  state = {
    data: [],
    error: ""
  }

  componentDidMount() {
    API.getUsers()
    .then(res => 
      this.setState({
        data: res.data.results
      })
    )
    .catch(err => this.setState({
      error: "There was a problem loading the data"
    }))
  }

  

  render(){
    return (
      <div>
        <Header />
        <EmployeeList data={this.state.data} />

      </div>
    );
  }
}
export default App;
