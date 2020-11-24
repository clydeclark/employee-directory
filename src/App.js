import './App.css';
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import API from "./utils/API";
import React, { useEffect, useState} from "react";


function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [reverse, setReverse] = useState(false);
  const [error, setError] = useState("");

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

  function searchList(e) {
    const filter = data.filter(employee => {
      return employee.name.first.toLowerCase().includes(e.target.value.toLowerCase())
    });
    setFilteredData(filter);
  }
  
  return (
      <div>
        <Header />
        <form className="search" id="search-field">
          <div className="form-group">
            <label htmlFor="employeeSearch">Search Employee:</label>
            <input
              onChange={searchList}
              name="name"
              type="text"
              className="form-control"
              placeholder="Type a first name to begin"
              id="name"
            />
          </div>
        </form>
        <EmployeeList data={filteredData.length>0?filteredData:data} reverse={reverse} setReverse={setReverse} />
      </div>
    );
}
export default App;
