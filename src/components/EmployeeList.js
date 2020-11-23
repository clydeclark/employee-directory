import React, { Component, useEffect, useState} from "react";
import toggleSort from "../utils/Sort";
// import App from "../App";
// import API from "../utils/API";

function EmployeeList(props) {
    const employees = props.data;
    let reverse = props.reverse;
    function sortByName(current, next) {
        if (current.name.first > next.name.first) {
            return 1;
        }
        return -1;
    }

    function sortList() {
        if (!reverse) {
            return employees.sort(sortByName);
        } else {
            return employees.sort(sortByName).reverse();
        }
    }

    function searchList() {

    }
    let employeesSorted = sortList();

    
    // console.log(employees);


    
    return (
        <div class="container">
            <div class="row">
            <form className="search" id="search-field">
                <div className="form-group">
                    <label htmlFor="employeeSearch">Search Employee:</label>
                    <input
                    value={props.search}
                    onChange={searchList}
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Type a name to begin"
                    id="name"
                    />
                </div>
            </form>
                <div class="col-md-12">
                    <div class="col-head data-left col-md-1">Image</div>
                    <div class="col-head data-left col-md-3" onClick={toggleSort}>Name (Sort)<i class="glyphicon glyphicon-sort white"></i></div>
                    <div class="col-head data-left col-md-3">Phone</div>
                    <div class="col-head data-left col-md-3">Email</div>
                    <div class="col-head data-left col-md-2">Date of Birth</div>
                </div>
                {employeesSorted.map(employee =>
                    <div class="employee col-md-12">
                        <img class="data-left col-md-1" src={employee.picture.thumbnail} alt={employee.name.first} />
                        <p class="data-left col-md-3">{employee.name.first} {employee.name.last}</p>
                        <p class="data-left col-md-3">{employee.phone}</p>
                        <p class="data-left col-md-3">{employee.email}</p>
                        <p class="data-left col-md-2">{employee.dob.date.slice(0,10)}</p>
                    </div>
                )}
            </div>
        </div>
    
    )
    
}

export default EmployeeList;