import React from "react";
// import API from "../utils/API";

function EmployeeList(props) {
    const employees = props.data;
    // let name = `${employees.name.first} ${employees.name.last}`;
    console.log(employees);
    
    return (
        <div>
            
            {employees.map(employee =>
                <div>
                    <img src={employee.picture.thumbnail} alt={`name`} />
                    {/* <p>${name}</p> */}
                    <p>{employee.phone}</p>
                    <p>{employee.email}</p>
                </div>
            )}

        </div>
    
    )
    
}

export default EmployeeList;