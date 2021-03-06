import React from "react";

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

    function toggleSort() {
        if (!reverse) {
            employees.sort(sortByName);
        } else {
            employees.reverse(sortByName);
        }
        props.setReverse(!reverse);
    }
    

    let employeesSorted = sortList();

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-head data-left col-md-1">Image</div>
                    <div class="col-head data-left col-md-3 hover-finger" onClick={toggleSort}>Name <i class="glyphicon glyphicon-sort white"></i>(Sort)</div>
                    <div class="col-head data-left col-md-3">Phone</div>
                    <div class="col-head data-left col-md-3">Email</div>
                    <div class="col-head data-left col-md-2">Date of Birth</div>
                </div>
                {employeesSorted.map(employee =>
                    <div key={employee.id.value} class="employee col-md-12">
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