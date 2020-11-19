import React from "react";
// import API from "../utils/API";

function EmployeeList(props) {
    const employees = props.data;
    // let name = {employees.name.first} + " " + {employees.name.last};
    console.log(employees);
    
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="data-left col-md-1">image</div>
                    <div class="data-left col-md-3">name</div>
                    <div class="data-left col-md-2">phone</div>
                    <div class="data-left col-md-3">email</div>
                    <div class="data-left col-md-3">date of birth</div>
                </div>
                {employees.map(employee =>
                    <div class="employee col-md-12">
                        <img class="data-left col-md-1" src={employee.picture.thumbnail} alt={`name`} />
                        <p class="data-left col-md-3">name</p>
                        <p class="data-left col-md-2">{employee.phone}</p>
                        <p class="data-left col-md-3">{employee.email}</p>
                        <p class="data-left col-md-3">{employee.dob.date}</p>
                    </div>
                )}
            </div>
        </div>
    
    )
    
}

export default EmployeeList;