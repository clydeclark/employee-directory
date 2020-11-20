import React from "react";
// import API from "../utils/API";

function EmployeeList(props) {
    const employees = props.data;
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
                {employees.map(employee =>
                    <div class="employee col-md-12">
                        <img class="data-left col-md-1" src={employee.picture.thumbnail} alt={`name`} />
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