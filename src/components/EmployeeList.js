import React from "react";
// import API from "../utils/API";

function EmployeeList(props) {
    const employees = props.data;
    // let name = `${{employees.name.first}} ${{employees.name.last}}`;
    console.log(employees);
    
    return (
        <div>
            
            {employees.map(employee =>
                <div class="employee">
                    <img class="left" src={employee.picture.thumbnail} alt={`name`} />
                    <p class="left">{employee.phone}</p>
                    <p class="left">{employee.email}</p>
                </div>
            )}

        </div>
    
    )
    
}

export default EmployeeList;