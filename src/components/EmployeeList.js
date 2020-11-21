import React from "react";
// import API from "../utils/API";

function EmployeeList(props) {
    const employees = props.data;
    function sortByName(current, next) {
        if (current.name.first > next.name.first) {
            return 1;
        }
        return -1;
    }
    const employeesSorted = employees.sort(sortByName);
    const employeesReverse = employeesSorted.reverse(sortByName);
    console.log(employees);


    
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-head data-left col-md-1">Image</div>
                    <div class="col-head data-left col-md-3">Name</div>
                    <div class="col-head data-left col-md-2">Phone</div>
                    <div class="col-head data-left col-md-3">Email</div>
                    <div class="col-head data-left col-md-3">Date of Birth</div>
                </div>
                {employeesSorted.map(employee =>
                    <div class="employee col-md-12">
                        <img class="data-left col-md-1" src={employee.picture.thumbnail} alt={employee.name.first} />
                        <p class="data-left col-md-3">{employee.name.first} {employee.name.last}</p>
                        <p class="data-left col-md-2">{employee.phone}</p>
                        <p class="data-left col-md-3">{employee.email}</p>
                        <p class="data-left col-md-3">{employee.dob.date.slice(0,10)}</p>
                    </div>
                )}
            </div>
        </div>
    
    )
    
}

export default EmployeeList;